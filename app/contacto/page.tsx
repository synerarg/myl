"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/Button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Linkedin } from "lucide-react"
import { useState } from "react"
import ContactMethod from "@/components/ContactMethod"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  })

  const handleFormSubmit = async (e: React.FormEvent) => {
    
  }

  return (
    <section className="relative isolate min-h-screen py-12 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">    
          <Card className="lg:col-span-2 border-green bg-white/95 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl overflow-hidden rounded-md">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-xl md:text-2xl font-semibold text-[#2c3e50]">Formulario de contacto</CardTitle>
              <p className="text-sm text-[#4d5a5f]">Completá para recibir asesoramiento personalizado</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-[#2c3e50]">
                      Nombre y Apellido*
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-0 border-b-2 border-green rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-green transition-colors bg-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-[#2c3e50]">
                      Email*
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-0 border-b-2 border-green rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-green transition-colors bg-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-[#2c3e50]">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="border-0 border-b-2 border-green rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-green transition-colors bg-transparent"
                    />
                  </div>

                  <div className="space-y-2 max-w-full overflow-hidden">
                    <Label htmlFor="interest" className="text-sm font-medium text-[#2c3e50]">
                      Seleccioná tu interés
                    </Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    >
                      <SelectTrigger className="border-0 border-b-2 border-green rounded-none px-0 shadow-none focus:ring-0 focus:border-green transition-colors bg-transparent w-full max-w-full">
                        <SelectValue placeholder="Elegí una opción…" />
                      </SelectTrigger>
                      <SelectContent className="max-w-[calc(100vw-2rem)]">
                        <SelectItem value="service1">Servicio1</SelectItem>
                        <SelectItem value="service2">Serivio2</SelectItem>
                        <SelectItem value="service3">Serivio3</SelectItem>
                        <SelectItem value="service4">Serivio4</SelectItem>
                        <SelectItem value="service5">Serivio5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-[#2c3e50]">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Contexto actual, objetivo y plazo deseado"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="resize-none border-0 border-b-2 border-green rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-green transition-colors bg-transparent placeholder:text-gray"
                  />
                </div>

                <Button
                  text={'Enviar'}
                  variant="primary"
                  type="submit"
                />
              </form>
            </CardContent>
          </Card>

          <Card className="border-green bg-white/95 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl h-fit rounded-md">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-lg md:text-xl font-semibold text-[#2c3e50]">
                Otros métodos de contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 rounded-md">
              <ContactMethod
                href="mailto:info@mylservicios.com.ar"
                icon={<Mail className="h-5 w-5 text-green" />}
                label="info@mylservicios.com.ar"
              />
              <ContactMethod
                href="https://wa.me/5492944136902"
                icon={<Phone className="h-5 w-5 text-green" />}
                label="whatsapp/mylservicios"
              />
              <ContactMethod
                href="https://www.linkedin.com/in/mylservicios/"
                icon={<Linkedin className="h-5 w-5 text-green" />}
                label="mylservicios"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


