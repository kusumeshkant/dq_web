'use client'

import { useState } from 'react'
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WEB3FORMS_KEY } from '@/lib/constants'
import Button from '@/components/ui/Button'

// Removed fields (add back when ready): storeName, storeType, ordersPerDay
interface FormData {
  name: string
  city: string
  mobile: string
  email: string
}

const INITIAL: FormData = {
  name: '', city: '', mobile: '', email: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `DQ Demo Request — ${form.name} (${form.city})`,
          from_name: 'DQ Store Website',
          name: form.name,
          email: form.email,
          message: [
            `Name: ${form.name}`,
            `City: ${form.city}`,
            `Mobile: ${form.mobile}`,
            `Email: ${form.email}`,
          ].join('\n'),
        }),
      })

      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try WhatsApp or email below.')
      }
    } catch {
      setError('Network error. Please try WhatsApp or email below.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-dq-light rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">We'll be in touch within 24 hours</h3>
        <p className="text-gray-500 text-sm mb-4">
          Or reach us directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-dq-green font-medium">
            {CONTACT_EMAIL}
          </a>
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20just%20submitted%20a%20demo%20request%20from%20dqstore.in`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1ebe5d] transition"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.082a.75.75 0 0 0 .921.921l5.245-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.51-5.17-1.399l-.37-.219-3.112.87.87-3.112-.219-.37A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your Name *" name="name" value={form.name} onChange={handleChange} required />
        <Field label="City *" name="city" value={form.city} onChange={handleChange} required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Mobile Number *" name="mobile" type="tel" value={form.mobile} onChange={handleChange} required />
        <Field label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

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
