'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiTwitterXLine } from "react-icons/ri"
import { TiSocialFacebook } from "react-icons/ti"
import { FaLinkedinIn } from "react-icons/fa6"
import { SiWhatsapp } from "react-icons/si"
import { Label } from "./ui/label"
import { Card, CardContent } from "./ui/card"
import { X } from 'lucide-react'
import { useOpenContactUs } from "@/hook/contact-open"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { toast } from "@/hooks/use-toast"

export const Share = ({url} : {url: string}) => {
    const { onClose } = useOpenContactUs()
    const [copied, setCopied] = useState(false)
    const shareUrl = url // Replace with actual share URL

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true)
            toast({
                title: "Link copied!",
                description: "The link has been copied to your clipboard.",
            })
            setTimeout(() => setCopied(false), 2000)
        })
    }

    const shareLinks = [
        { icon: RiTwitterXLine, bg: "bg-black", url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}` },
        { icon: TiSocialFacebook, bg: "bg-[#4464a3]", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
        { icon: FaLinkedinIn, bg: "bg-[#0077b5]", url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}` },
        { icon: SiWhatsapp, bg: "bg-[#25D366]", url: `https://wa.me/?text=${encodeURIComponent(shareUrl)}` },
    ]

    return (
        <AnimatePresence>
            <motion.div 
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div 
                    className="w-full max-w-md bg-white rounded-lg shadow-xl relative overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 15 }}
                >
                    <Card className="border-none shadow-none">
                        <CardContent className="p-6">
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                className="absolute right-2 top-2" 
                                onClick={onClose}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                            <Label className="text-xl font-bold block text-center mb-6">Share Post</Label>
                            <div className="flex justify-center gap-4 mb-6">
                                {shareLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 flex items-center justify-center ${link.bg} rounded-full transition-transform duration-200 ease-in-out hover:scale-110`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <link.icon color="white" size={24} />
                                    </motion.a>
                                ))}
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input 
                                    value={shareUrl} 
                                    readOnly 
                                    className="flex-grow"
                                />
                                <Button 
                                    onClick={copyToClipboard}
                                    variant="outline"
                                    className={copied ? "bg-green-500 text-white" : ""}
                                >
                                    {copied ? "Copied!" : "Copy"}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

