'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ChevronRight, Send, ArrowLeft, X, Loader2 } from 'lucide-react'
import { useOpenContactUs } from '@/hook/contact-open'
import { useCreateContact } from '@/features/api/use-contact'
import { toast } from 'sonner'
import { stdCodes } from '@/std/std'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  marketingSpend: string
  location: string
  interests: string
  std: string
}

export default function ContactForm() {
  const [mount,setMount] = useState(false)
  const [step, setStep] = useState(1)
  const {isOpen, onClose} = useOpenContactUs();
  const mutation = useCreateContact();
  const [isPending,setIsPending] = useState(false)

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCodes, setFilteredCodes] = useState(stdCodes);
  const normalizeString = (str: string) => str.replace(/[()]/g, "").toLowerCase();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    marketingSpend: '',
    location: '',
    interests: '',
    std: ''
  })

  useEffect(() => {
    setMount(true)
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
      setIsPending(true)

    const phone = formData.std + formData.phone;

    const values = {
      name: formData.name,
      company: formData.company,
      content: formData.interests,
      email: formData.email,
      location: formData.location,
      marketingSpend: formData.marketingSpend,
      phone: phone
    };
    
    mutation.mutate(values, {
      onSuccess: () => {
        setIsPending(false)
        onClose();
      }
    })
  }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Normalize the search query
    const normalizedQuery = normalizeString(query);

    // Filter the country codes based on the normalized search query
    const filtered = stdCodes.filter(item =>
      normalizeString(item.label).includes(normalizedQuery)
    );
    
    setFilteredCodes(filtered);
  };

  const validateStep = () => {
    if (step === 1) {
      return formData.name && formData.phone && formData.email && formData.company && formData.std;
    } else if (step === 2) {
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

  if (!mount){
    return null
  }

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
          <div className="md:col-span-2 bg-gradient-to-br from-emerald-600 to-purple-600 p-6 md:p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Boost Your Marketing Game</h2>
            <p className="mb-4 text-sm md:text-base">Ready to skyrocket your brand? Fill out this form and let&apos;s create marketing magic together!</p>
            <div className="space-y-2 hidden md:block">
              {[1].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${step >= i ? 'bg-white text-emerald-600' : 'bg-emerald-300 text-white'} mr-3`}>
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
                      <Input placeholder='Name' id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <div className='flex gap-2'>
                      <Select onValueChange={(value) => handleSelectChange('std', value)}>
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="STD" />
                        </SelectTrigger>
                        <SelectContent className='z-[110]'>
                          {/* Search Bar */}
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search country"
                            className="p-2 border rounded mb-2 w-full"
                          />
                          
                          {/* SelectItems filtered by search */}
                          {filteredCodes.length === 0 ? (
                            <SelectItem disabled value="">
                              No matching countries found
                            </SelectItem>
                          ) : (
                            filteredCodes.map((item, index) => (
                              <SelectItem key={index} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                      <Input placeholder='Phone number' id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                        <Input placeholder='email@email.com' id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input placeholder='Company name' id="company" name="company" value={formData.company} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="company">Skype Id</Label>
                      <Input placeholder='Skype (optional)' id="interests" name="interests" value={formData.interests} onChange={handleInputChange} required />
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
                      <Label htmlFor="location">Location</Label>
                      <Input placeholder='Location' id="location" name="location" type="location" value={formData.location} onChange={handleInputChange} required />
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
                        placeholder='Please describe your intrest and query'
                        value={formData.interests} 
                        onChange={handleInputChange} 
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div className="flex flex-col sm:flex-row justify-end mt-6 space-y-4 sm:space-y-0">
                {/* jb to je */}
                {/* {step > 1 && (
                  <Button type="button" onClick={prevStep} variant="outline" className="w-full sm:w-auto">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button type="button" disabled={!validateStep()} onClick={nextStep} className="w-full sm:w-auto sm:ml-auto">
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : ( */}
                  <Button type="button" disabled={!validateStep()} onClick={handleFinalSubmit} className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6">
                    {isPending? <div className='flex items-center space-x-2'>Submitting <Loader2 className=' animate-spin transition-all ml-2'/></div>:<div className='flex items-center space-x-2'>Submit <Send className="ml-2" /></div>}
                  </Button>
                {/* )} */}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}