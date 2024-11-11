import Image from "next/image"
import { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"


interface FormData {
    name: string
    email: string
    phone: string
    company: string
    marketingSpend: string
    location: string
    interests: string
  }

const ContactUs =()=>{

    const [isOpen, setIsOpen] = useState(true)
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      phone: '',
      company: '',
      marketingSpend: '',
      location: '',
      interests: ''
    })
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log('Form data to send:', formData)
    }
  
    if (!isOpen) return null

    return (
        <div className="bg-white font-sans py-10">
            <div className=" w-full grid md:grid-cols-2 gap-4 bg-white md:px-12 px-2">
                
                <div className="flex flex-col gap-y-4 justify-center">
                    <div className="text-2xl font-[600] text-[#472282] flex">
                            <p className="text-black">adbyte</p><p>hub</p>
                        </div>
                        <h1 className="font-[700] text-2xl">We empower you to boost your business</h1>
                        <p className="font-[600] text-lg">Integrated with all major MMPs</p>
                        <div className="grid md:grid-cols-3 items-center w-[20rem]">
                            <Image
                                src="/Group-0.png"
                                alt="Group-1"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                            
                            <Image
                                src="/Group-1.png"
                                alt="Group-2"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                            <Image
                                src="/Group-2.png"
                                alt="Group-3"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                            <Image
                                src="/Group-3.png"
                                alt="Group-4"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                            
                            <Image
                                src="/Group-6.png"
                                alt="Group-0"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                        </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Work Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <Input
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
          </div>
          <Input
            name="marketingSpend"
            placeholder="What's your current performance marketing spend?"
            value={formData.marketingSpend}
            onChange={handleInputChange}
            required
          />
          <Input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
          <Textarea
            name="interests"
            placeholder="What are you interested in?"
            className="min-h-[100px]"
            value={formData.interests}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            BOOK DEMO
          </Button>
        </form>
            </div>
        </div>
    )
}
export default ContactUs
