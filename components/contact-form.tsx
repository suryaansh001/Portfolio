
"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
// import { useForm } from "@formspree/react"


export function ContactForm() {
  // const [state, handleSubmit] = useForm("mjkoqjok");
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  useEffect(() => {
    emailjs.init("gjoWJBBYG4hxleaVY")
  }, [])

  const customHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    console.log('Attempting to send email with params:', templateParams)

    try {
      console.log('Trying EmailJS...')
      await emailjs.send("service_9n3oj11", "template_5713oww", templateParams)
      console.log('EmailJS success!')
      setSucceeded(true)
    } catch (error) {
      console.error('EmailJS failed:', error)
      console.log('EmailJS timed out, trying Formspree API directly...')
      try {
        const response = await fetch('https://formspree.io/f/mjkoqjok', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(templateParams),
        })
        if (response.ok) {
          console.log('Formspree success!')
          setSucceeded(true)
        } else {
          throw new Error('Formspree failed')
        }
      } catch (formspreeError) {
        console.error('Formspree also failed:', formspreeError)
        alert('Sorry, there was an error sending your message. Please try again later.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          {succeeded ? (
            <div className="text-green-400 text-center py-8 text-lg font-semibold">Thank you for your message! I will get back to you soon.</div>
          ) : (
            <form onSubmit={customHandleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                disabled={submitting}
              >
                {submitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  )
}
