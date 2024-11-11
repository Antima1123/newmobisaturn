'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { X } from 'lucide-react'
import { useOpenContactUs } from '@/hook/contact-open'
import { useCreateContact } from '@/features/api/use-contact'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  marketingSpend: string
  location: string
  interests: string
}

export default function ContactForm() {
    const {isOpen, onClose} = useOpenContactUs();
    const mutation = useCreateContact();

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
    const values = {
            name: formData.name,
            company: formData.company,
            content: formData.interests,
            email: formData.email,
            location: formData.location,
            marketingSpend: formData.marketingSpend,
            phone: formData.phone
    };
    
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    })
  }

  if (!isOpen) return null

  return (
    <Card className=" fixed inset-0 z-[100] m-auto w-full max-w-5xl md:max-h-[60vh] overflow-auto bg-white p-6">
        <div className=' relative'>
          <button 
            onClick={() => onClose()}
            className="absolute right-0 -top-2 p-2 hover:bg-gray-100 rounded-full z-[100]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      <div className=' w-full grid md:grid-cols-2'>
      <CardHeader className="relative p-0 mb-6 mt-8">
        <div className="space-y-6">
        <div className="text-2xl font-[600] text-[#D9083C] flex">
                            {/* <Image src="/logo.png" height={240} width={240} alt="logo"/> */}
                            <p className="text-black">adbyte</p><p>hub</p>
                        </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              We empower you to boost your business
            </h2>
            <p className="text-muted-foreground">
              Integrated with all major MMPs
            </p>
          </div>
          <div className="flex gap-6 items-center flex-wrap">
            {[0,1, 2, 3].map((i) => (
              <img
                key={i}
                src={`/Group-${i}.png`}
                alt={`Partner ${i}`}
                className="h-4 opacity-75"
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 relative">
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
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
      </CardContent>
      </div>
    </Card>
  )
}