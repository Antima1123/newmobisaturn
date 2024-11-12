'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ChevronRight, Send, ArrowLeft, X } from 'lucide-react'
import { useOpenContactUs } from '@/hook/contact-open'
import { useCreateContact } from '@/features/api/use-contact'
import { toast } from 'sonner'

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
  const [step, setStep] = useState(1)
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateStep()) {

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
  }

  const validateStep = () => {
    if (step === 1) {
      return formData.name && formData.phone && formData.email && formData.company;
    } else if (step === 2) {
      toast.warning("please fill the form")
      return formData.marketingSpend && formData.location;
    }
    return true;
  }

  const handleFinalSubmit = () => {
    if (validateStep()) {
      handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
    }
  }

  if (!isOpen) return null

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl"
      >
        <div className='absolute top-4 right-4 cursor-pointer' onClick={() => onClose()}>
          <X/>
        </div>
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-purple-600 p-6 md:p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Boost Your Marketing Game</h2>
            <p className="mb-4 text-sm md:text-base">Ready to skyrocket your brand? Fill out this form and let&apos;s create marketing magic together!</p>
            <div className="space-y-2 hidden md:block">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${step >= i ? 'bg-white text-purple-600' : 'bg-purple-300 text-white'} mr-3`}>
                    {i}
                  </div>
                  <span className={`text-sm md:text-base ${step >= i ? 'font-semibold' : 'text-purple-200'}`}>
                    {i === 1 ? 'Basic Info' : i === 2 ? 'Marketing Details' : 'Final Touch'}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Let&apos;s Get Started</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} required />
                    </div>
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Marketing Insights</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="budget">Marketing Budget</Label>
                      <Select onValueChange={(value) => handleSelectChange('marketingSpend', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent className='z-[110]'>
                          <SelectItem value="0-5k">0 - 5,000</SelectItem>
                          <SelectItem value="5k-20k">5,000 - 20,000</SelectItem>
                          <SelectItem value="20k-50k">20,000 - 50,000</SelectItem>
                          <SelectItem value="50k+">50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Primary Marketing Goals</Label>
                      <Select onValueChange={(value) => handleSelectChange('location', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your location" />
                        </SelectTrigger>
                        <SelectContent className='z-[110]'>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="kolkata">Kolkata</SelectItem>
                          <SelectItem value="surat">Surat</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                          <SelectItem value="jaipur">Jaipur</SelectItem>
                          <SelectItem value="lucknow">Lucknow</SelectItem>
                          <SelectItem value="kanpur">Kanpur</SelectItem>
                          <SelectItem value="nagpur">Nagpur</SelectItem>
                          <SelectItem value="indore">Indore</SelectItem>
                          <SelectItem value="thane">Thane</SelectItem>
                          <SelectItem value="bhopal">Bhopal</SelectItem>
                          <SelectItem value="visakhapatnam">Visakhapatnam</SelectItem>
                          <SelectItem value="pimpri-chinchwad">Pimpri-Chinchwad</SelectItem>
                          <SelectItem value="patna">Patna</SelectItem>
                          <SelectItem value="vadodara">Vadodara</SelectItem>
                          <SelectItem value="ghaziabad">Ghaziabad</SelectItem>
                          <SelectItem value="ludhiana">Ludhiana</SelectItem>
                          <SelectItem value="agra">Agra</SelectItem>
                          <SelectItem value="nashik">Nashik</SelectItem>
                          <SelectItem value="faridabad">Faridabad</SelectItem>
                          <SelectItem value="meerut">Meerut</SelectItem>
                          <SelectItem value="rajkot">Rajkot</SelectItem>
                          <SelectItem value="kalyan-dombivli">Kalyan-Dombivli</SelectItem>
                          <SelectItem value="vasai-virar">Vasai-Virar</SelectItem>
                          <SelectItem value="varanasi">Varanasi</SelectItem>
                          <SelectItem value="srinagar">Srinagar</SelectItem>
                          <SelectItem value="aurangabad">Aurangabad</SelectItem>
                          <SelectItem value="dhanbad">Dhanbad</SelectItem>
                          <SelectItem value="amritsar">Amritsar</SelectItem>
                          <SelectItem value="navi-mumbai">Navi Mumbai</SelectItem>
                          <SelectItem value="allahabad">Allahabad</SelectItem>
                          <SelectItem value="ranchi">Ranchi</SelectItem>
                          <SelectItem value="howrah">Howrah</SelectItem>
                          <SelectItem value="coimbatore">Coimbatore</SelectItem>
                          <SelectItem value="jabalpur">Jabalpur</SelectItem>
                          <SelectItem value="gwalior">Gwalior</SelectItem>
                          <SelectItem value="vijayawada">Vijayawada</SelectItem>
                          <SelectItem value="jodhpur">Jodhpur</SelectItem>
                          <SelectItem value="madurai">Madurai</SelectItem>
                          <SelectItem value="raipur">Raipur</SelectItem>
                          <SelectItem value="kota">Kota</SelectItem>
                          <SelectItem value="guwahati">Guwahati</SelectItem>
                          <SelectItem value="chandigarh">Chandigarh</SelectItem>
                          <SelectItem value="solapur">Solapur</SelectItem>
                          <SelectItem value="hubli-dharwad">Hubli-Dharwad</SelectItem>
                          <SelectItem value="bareilly">Bareilly</SelectItem>
                          <SelectItem value="moradabad">Moradabad</SelectItem>
                          <SelectItem value="mysore">Mysore</SelectItem>
                          <SelectItem value="tiruchirappalli">Tiruchirappalli</SelectItem>
                          <SelectItem value="tiruppur">Tiruppur</SelectItem>
                          <SelectItem value="bhubaneswar">Bhubaneswar</SelectItem>
                          <SelectItem value="salem">Salem</SelectItem>
                          <SelectItem value="aligarh">Aligarh</SelectItem>
                          <SelectItem value="bhilai">Bhilai</SelectItem>
                          <SelectItem value="guntur">Guntur</SelectItem>
                          <SelectItem value="jalandhar">Jalandhar</SelectItem>
                          <SelectItem value="bhiwandi">Bhiwandi</SelectItem>
                          <SelectItem value="saharanpur">Saharanpur</SelectItem>
                          <SelectItem value="gorakhpur">Gorakhpur</SelectItem>
                          <SelectItem value="bikaner">Bikaner</SelectItem>
                          <SelectItem value="amravati">Amravati</SelectItem>
                          <SelectItem value="noida">Noida</SelectItem>
                          <SelectItem value="jamshedpur">Jamshedpur</SelectItem>
                          <SelectItem value="bhavnagar">Bhavnagar</SelectItem>
                          <SelectItem value="cuttack">Cuttack</SelectItem>
                          <SelectItem value="bijapur">Bijapur</SelectItem>
                          <SelectItem value="udupi">Udupi</SelectItem>
                          <SelectItem value="nellore">Nellore</SelectItem>
                          <SelectItem value="vellore">Vellore</SelectItem>
                          <SelectItem value="akola">Akola</SelectItem>
                          <SelectItem value="tirupati">Tirupati</SelectItem>
                          <SelectItem value="rourkela">Rourkela</SelectItem>
                          <SelectItem value="jamnagar">Jamnagar</SelectItem>
                          <SelectItem value="ujjain">Ujjain</SelectItem>
                          <SelectItem value="sangli">Sangli</SelectItem>
                          <SelectItem value="warangal">Warangal</SelectItem>
                          <SelectItem value="rajahmundry">Rajahmundry</SelectItem>
                          <SelectItem value="kurnool">Kurnool</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Final Thoughts</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="interests">Anything else you&apos;d like us to know?</Label>
                      <Textarea 
                        id="interests" 
                        name="interests" 
                        value={formData.interests} 
                        onChange={handleInputChange} 
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
                {step > 1 && (
                  <Button type="button" onClick={prevStep} variant="outline" className="w-full sm:w-auto">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button type="button" disabled={!validateStep()} onClick={nextStep} className="w-full sm:w-auto sm:ml-auto">
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="button" onClick={handleFinalSubmit} className="flex items-center space-x-2">
                    Submit <Send className="ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}