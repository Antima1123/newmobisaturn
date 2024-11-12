'use client'

import { useState } from 'react'
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
  const [step, setStep] = useState(1)
  const {isOpen, onClose} = useOpenContactUs();
  const mutation = useCreateContact();
  const [isPending,setIsPending] = useState(false)

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
                      <Input placeholder='Name' id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <div className='flex gap-2'>
                        <Select onValueChange={(value) => handleSelectChange('std', value)}>
                          <SelectTrigger className='w-18'>
                            <SelectValue placeholder="STD"/>
                          </SelectTrigger>
                          <SelectContent className='z-[110]'>
                          <SelectItem value="+93">+93 (Afghanistan)</SelectItem>
                            <SelectItem value="+355">+355 (Albania)</SelectItem>
                            <SelectItem value="+213">+213 (Algeria)</SelectItem>
                            <SelectItem value="+1684">+1684 (American Samoa)</SelectItem>
                            <SelectItem value="+376">+376 (Andorra)</SelectItem>
                            <SelectItem value="+244">+244 (Angola)</SelectItem>
                            <SelectItem value="+1264">+1264 (Anguilla)</SelectItem>
                            <SelectItem value="+672">+672 (Antarctica)</SelectItem>
                            <SelectItem value="+1268">+1268 (Antigua and Barbuda)</SelectItem>
                            <SelectItem value="+54">+54 (Argentina)</SelectItem>
                            <SelectItem value="+374">+374 (Armenia)</SelectItem>
                            <SelectItem value="+297">+297 (Aruba)</SelectItem>
                            <SelectItem value="+61">+61 (Australia)</SelectItem>
                            <SelectItem value="+43">+43 (Austria)</SelectItem>
                            <SelectItem value="+994">+994 (Azerbaijan)</SelectItem>
                            <SelectItem value="+1242">+1242 (Bahamas)</SelectItem>
                            <SelectItem value="+973">+973 (Bahrain)</SelectItem>
                            <SelectItem value="+880">+880 (Bangladesh)</SelectItem>
                            <SelectItem value="+1246">+1246 (Barbados)</SelectItem>
                            <SelectItem value="+375">+375 (Belarus)</SelectItem>
                            <SelectItem value="+32">+32 (Belgium)</SelectItem>
                            <SelectItem value="+501">+501 (Belize)</SelectItem>
                            <SelectItem value="+229">+229 (Benin)</SelectItem>
                            <SelectItem value="+1441">+1441 (Bermuda)</SelectItem>
                            <SelectItem value="+975">+975 (Bhutan)</SelectItem>
                            <SelectItem value="+591">+591 (Bolivia)</SelectItem>
                            <SelectItem value="+387">+387 (Bosnia and Herzegovina)</SelectItem>
                            <SelectItem value="+267">+267 (Botswana)</SelectItem>
                            <SelectItem value="+55">+55 (Brazil)</SelectItem>
                            <SelectItem value="+1284">+1284 (British Virgin Islands)</SelectItem>
                            <SelectItem value="+673">+673 (Brunei)</SelectItem>
                            <SelectItem value="+359">+359 (Bulgaria)</SelectItem>
                            <SelectItem value="+226">+226 (Burkina Faso)</SelectItem>
                            <SelectItem value="+257">+257 (Burundi)</SelectItem>
                            <SelectItem value="+855">+855 (Cambodia)</SelectItem>
                            <SelectItem value="+237">+237 (Cameroon)</SelectItem>
                            <SelectItem value="+1">+1 (Canada)</SelectItem>
                            <SelectItem value="+238">+238 (Cape Verde)</SelectItem>
                            <SelectItem value="+1345">+1345 (Cayman Islands)</SelectItem>
                            <SelectItem value="+236">+236 (Central African Republic)</SelectItem>
                            <SelectItem value="+56">+56 (Chile)</SelectItem>
                            <SelectItem value="+86">+86 (China)</SelectItem>
                            <SelectItem value="+61">+61 (Christmas Island)</SelectItem>
                            <SelectItem value="+57">+57 (Colombia)</SelectItem>
                            <SelectItem value="+269">+269 (Comoros)</SelectItem>
                            <SelectItem value="+242">+242 (Congo, Republic of the)</SelectItem>
                            <SelectItem value="+243">+243 (Congo, Democratic Republic of the)</SelectItem>
                            <SelectItem value="+682">+682 (Cook Islands)</SelectItem>
                            <SelectItem value="+506">+506 (Costa Rica)</SelectItem>
                            <SelectItem value="+225">+225 (Côte d&apos;Ivoire)</SelectItem>
                            <SelectItem value="+385">+385 (Croatia)</SelectItem>
                            <SelectItem value="+53">+53 (Cuba)</SelectItem>
                            <SelectItem value="+357">+357 (Cyprus)</SelectItem>
                            <SelectItem value="+420">+420 (Czech Republic)</SelectItem>
                            <SelectItem value="+45">+45 (Denmark)</SelectItem>
                            <SelectItem value="+253">+253 (Djibouti)</SelectItem>
                            <SelectItem value="+1767">+1767 (Dominica)</SelectItem>
                            <SelectItem value="+1809">+1809 (Dominican Republic)</SelectItem>
                            <SelectItem value="+593">+593 (Ecuador)</SelectItem>
                            <SelectItem value="+20">+20 (Egypt)</SelectItem>
                            <SelectItem value="+503">+503 (El Salvador)</SelectItem>
                            <SelectItem value="+240">+240 (Equatorial Guinea)</SelectItem>
                            <SelectItem value="+291">+291 (Eritrea)</SelectItem>
                            <SelectItem value="+372">+372 (Estonia)</SelectItem>
                            <SelectItem value="+251">+251 (Ethiopia)</SelectItem>
                            <SelectItem value="+500">+500 (Falkland Islands)</SelectItem>
                            <SelectItem value="+298">+298 (Faroe Islands)</SelectItem>
                            <SelectItem value="+679">+679 (Fiji)</SelectItem>
                            <SelectItem value="+358">+358 (Finland)</SelectItem>
                            <SelectItem value="+33">+33 (France)</SelectItem>
                            <SelectItem value="+594">+594 (French Guiana)</SelectItem>
                            <SelectItem value="+689">+689 (French Polynesia)</SelectItem>
                            <SelectItem value="+241">+241 (Gabon)</SelectItem>
                            <SelectItem value="+220">+220 (Gambia)</SelectItem>
                            <SelectItem value="+995">+995 (Georgia)</SelectItem>
                            <SelectItem value="+49">+49 (Germany)</SelectItem>
                            <SelectItem value="+233">+233 (Ghana)</SelectItem>
                            <SelectItem value="+350">+350 (Gibraltar)</SelectItem>
                            <SelectItem value="+30">+30 (Greece)</SelectItem>
                            <SelectItem value="+299">+299 (Greenland)</SelectItem>
                            <SelectItem value="+1473">+1473 (Grenada)</SelectItem>
                            <SelectItem value="+590">+590 (Guadeloupe)</SelectItem>
                            <SelectItem value="+502">+502 (Guatemala)</SelectItem>
                            <SelectItem value="+224">+224 (Guinea)</SelectItem>
                            <SelectItem value="+245">+245 (Guinea-Bissau)</SelectItem>
                            <SelectItem value="+592">+592 (Guyana)</SelectItem>
                            <SelectItem value="+509">+509 (Haiti)</SelectItem>
                            <SelectItem value="+504">+504 (Honduras)</SelectItem>
                            <SelectItem value="+852">+852 (Hong Kong)</SelectItem>
                            <SelectItem value="+36">+36 (Hungary)</SelectItem>
                            <SelectItem value="+354">+354 (Iceland)</SelectItem>
                            <SelectItem value="+91">+91 (India)</SelectItem>
                            <SelectItem value="+62">+62 (Indonesia)</SelectItem>
                            <SelectItem value="+98">+98 (Iran)</SelectItem>
                            <SelectItem value="+964">+964 (Iraq)</SelectItem>
                            <SelectItem value="+353">+353 (Ireland)</SelectItem>
                            <SelectItem value="+972">+972 (Israel)</SelectItem>
                            <SelectItem value="+39">+39 (Italy)</SelectItem>
                            <SelectItem value="+1876">+1876 (Jamaica)</SelectItem>
                            <SelectItem value="+81">+81 (Japan)</SelectItem>
                            <SelectItem value="+962">+962 (Jordan)</SelectItem>
                            <SelectItem value="+7">+7 (Kazakhstan)</SelectItem>
                            <SelectItem value="+254">+254 (Kenya)</SelectItem>
                            <SelectItem value="+686">+686 (Kiribati)</SelectItem>
                            <SelectItem value="+850">+850 (North Korea)</SelectItem>
                            <SelectItem value="+82">+82 (South Korea)</SelectItem>
                            <SelectItem value="+965">+965 (Kuwait)</SelectItem>
                            <SelectItem value="+996">+996 (Kyrgyzstan)</SelectItem>
                            <SelectItem value="+856">+856 (Laos)</SelectItem>
                            <SelectItem value="+371">+371 (Latvia)</SelectItem>
                            <SelectItem value="+961">+961 (Lebanon)</SelectItem>
                            <SelectItem value="+266">+266 (Lesotho)</SelectItem>
                            <SelectItem value="+231">+231 (Liberia)</SelectItem>
                            <SelectItem value="+218">+218 (Libya)</SelectItem>
                            <SelectItem value="+423">+423 (Liechtenstein)</SelectItem>
                            <SelectItem value="+370">+370 (Lithuania)</SelectItem>
                            <SelectItem value="+352">+352 (Luxembourg)</SelectItem>
                            <SelectItem value="+853">+853 (Macau)</SelectItem>
                            <SelectItem value="+389">+389 (North Macedonia)</SelectItem>
                            <SelectItem value="+261">+261 (Madagascar)</SelectItem>
                            <SelectItem value="+265">+265 (Malawi)</SelectItem>
                            <SelectItem value="+60">+60 (Malaysia)</SelectItem>
                            <SelectItem value="+960">+960 (Maldives)</SelectItem>
                            <SelectItem value="+223">+223 (Mali)</SelectItem>
                            <SelectItem value="+356">+356 (Malta)</SelectItem>
                            <SelectItem value="+692">+692 (Marshall Islands)</SelectItem>
                            <SelectItem value="+596">+596 (Martinique)</SelectItem>
                            <SelectItem value="+222">+222 (Mauritania)</SelectItem>
                            <SelectItem value="+230">+230 (Mauritius)</SelectItem>
                            <SelectItem value="+262">+262 (Mayotte)</SelectItem>
                            <SelectItem value="+52">+52 (Mexico)</SelectItem>
                            <SelectItem value="+691">+691 (Micronesia)</SelectItem>
                            <SelectItem value="+373">+373 (Moldova)</SelectItem>
                            <SelectItem value="+377">+377 (Monaco)</SelectItem>
                            <SelectItem value="+976">+976 (Mongolia)</SelectItem>
                            <SelectItem value="+382">+382 (Montenegro)</SelectItem>
                            <SelectItem value="+1">+1 (Montserrat)</SelectItem>
                            <SelectItem value="+212">+212 (Morocco)</SelectItem>
                            <SelectItem value="+258">+258 (Mozambique)</SelectItem>
                            <SelectItem value="+95">+95 (Myanmar)</SelectItem>
                            <SelectItem value="+264">+264 (Namibia)</SelectItem>
                            <SelectItem value="+674">+674 (Nauru)</SelectItem>
                            <SelectItem value="+977">+977 (Nepal)</SelectItem>
                            <SelectItem value="+31">+31 (Netherlands)</SelectItem>
                            <SelectItem value="+599">+599 (Netherlands Antilles)</SelectItem>
                            <SelectItem value="+687">+687 (New Caledonia)</SelectItem>
                            <SelectItem value="+64">+64 (New Zealand)</SelectItem>
                            <SelectItem value="+505">+505 (Nicaragua)</SelectItem>
                            <SelectItem value="+227">+227 (Niger)</SelectItem>
                            <SelectItem value="+234">+234 (Nigeria)</SelectItem>
                            <SelectItem value="+683">+683 (Niue)</SelectItem>
                            <SelectItem value="+850">+850 (North Korea)</SelectItem>
                            <SelectItem value="+47">+47 (Norway)</SelectItem>
                            <SelectItem value="+968">+968 (Oman)</SelectItem>
                            <SelectItem value="+92">+92 (Pakistan)</SelectItem>
                            <SelectItem value="+680">+680 (Palau)</SelectItem>
                            <SelectItem value="+970">+970 (Palestinian Territories)</SelectItem>
                            <SelectItem value="+507">+507 (Panama)</SelectItem>
                            <SelectItem value="+675">+675 (Papua New Guinea)</SelectItem>
                            <SelectItem value="+595">+595 (Paraguay)</SelectItem>
                            <SelectItem value="+51">+51 (Peru)</SelectItem>
                            <SelectItem value="+63">+63 (Philippines)</SelectItem>
                            <SelectItem value="+48">+48 (Poland)</SelectItem>
                            <SelectItem value="+351">+351 (Portugal)</SelectItem>
                            <SelectItem value="+1">+1 (Puerto Rico)</SelectItem>
                            <SelectItem value="+974">+974 (Qatar)</SelectItem>
                            <SelectItem value="+262">+262 (Réunion)</SelectItem>
                            <SelectItem value="+40">+40 (Romania)</SelectItem>
                            <SelectItem value="+7">+7 (Russia)</SelectItem>
                            <SelectItem value="+250">+250 (Rwanda)</SelectItem>
                            <SelectItem value="+590">+590 (Saint Barthélemy)</SelectItem>
                            <SelectItem value="+290">+290 (Saint Helena)</SelectItem>
                            <SelectItem value="+1869">+1869 (Saint Kitts and Nevis)</SelectItem>
                            <SelectItem value="+1758">+1758 (Saint Lucia)</SelectItem>
                            <SelectItem value="+590">+590 (Saint Martin)</SelectItem>
                            <SelectItem value="+1868">+1868 (Trinidad and Tobago)</SelectItem>
                            <SelectItem value="+1">+1 (Turks and Caicos Islands)</SelectItem>
                            <SelectItem value="+994">+994 (Azerbaijan)</SelectItem>
                            <SelectItem value="+999">+999 (Other/Unknown)</SelectItem>
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
                  <Button type="button" onClick={handleFinalSubmit} className="">
                    {isPending? <div className='flex items-center space-x-2'>Submitting <Loader2 className=' animate-spin transition-all ml-2'/></div>:<div className='flex items-center space-x-2'>Submit <Send className="ml-2" /></div>}
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