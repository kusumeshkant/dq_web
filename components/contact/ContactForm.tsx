'use client'

import { useState } from 'react'
import { STORE_TYPES } from '@/lib/constants'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  storeName: string
  storeType: string
  city: string
  mobile: string
  email: string
  ordersPerDay: string
}

const INITIAL: FormData = {
  name: '', storeName: '', storeType: '', city: '',
  mobile: '', email: '', ordersPerDay: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with real endpoint / Formspree / EmailJS
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-dq-light rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">We'll be in touch within 24 hours</h3>
        <p className="text-gray-500 text-sm">
          Meanwhile, feel free to reach us directly at{' '}
          <a href="mailto:stores@dqstore.in" className="text-dq-green font-medium">
            stores@dqstore.in
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your Name *" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Store Name *" name="storeName" value={form.storeName} onChange={handleChange} required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Store Type</label>
          <select
            name="storeType"
            value={form.storeType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-dq-green focus:border-transparent"
          >
            <option value="">Select type</option>
            {STORE_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <Field label="City *" name="city" value={form.city} onChange={handleChange} required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Mobile Number *" name="mobile" type="tel" value={form.mobile} onChange={handleChange} required />
        <Field label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>

      <Field
        label="Approx. orders per day?"
        name="ordersPerDay"
        type="number"
        value={form.ordersPerDay}
        onChange={handleChange}
        placeholder="e.g. 50"
      />

      <Button type="submit" size="lg" className="w-full justify-center" disabled={loading}>
        {loading ? 'Sending...' : 'Book Free Demo →'}
      </Button>
    </form>
  )
}

interface FieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
  placeholder?: string
}

function Field({ label, name, value, onChange, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-dq-green focus:border-transparent transition"
      />
    </div>
  )
}
