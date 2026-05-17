'use client'

import { useState } from 'react'
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WEB3FORMS_KEY, STORE_TYPES, DAILY_ORDER_RANGES } from '@/lib/constants'
import Button from '@/components/ui/Button'

interface FormData {
  name:        string
  storeName:   string
  storeType:   string
  city:        string
  mobile:      string
  email:       string
  dailyOrders: string
}

const INITIAL: FormData = {
  name: '', storeName: '', storeType: '', city: '', mobile: '', email: '', dailyOrders: '',
}

const INDIA_PHONE_RE = /^(\+91|91)?[6-9]\d{9}$/

export default function ContactForm() {
  const [form, setForm]           = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')
  const [phoneError, setPhoneError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (name === 'mobile') setPhoneError('')
  }

  function validatePhone(value: string) {
    const digits = value.replace(/\s|-/g, '')
    if (!INDIA_PHONE_RE.test(digits)) {
      setPhoneError('Enter a valid 10-digit Indian mobile number')
      return false
    }
    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validatePhone(form.mobile)) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject:    `DQ Demo Request — ${form.storeName || form.name} (${form.city})`,
          from_name:  'DQ Store Website',
          name:       form.name,
          email:      form.email,
          message: [
            `Name: ${form.name}`,
            `Store Name: ${form.storeName}`,
            `Store Type: ${form.storeType}`,
            `City: ${form.city}`,
            `Mobile: ${form.mobile}`,
            `Email: ${form.email}`,
            `Daily Orders: ${form.dailyOrders || 'Not specified'}`,
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
        <div className="w-16 h-16 bg-enterprise-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-enterprise-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request received!</h3>
        <p className="text-gray-600 text-sm mb-1">We&apos;ll call you within 24 hours (Mon–Sat, 10am–7pm IST).</p>
        <p className="text-gray-400 text-xs mb-6">
          Or email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-enterprise-blue font-medium">
            {CONTACT_EMAIL}
          </a>{' '}
          — Mon–Sat, 10am–7pm IST
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20just%20submitted%20a%20demo%20request%20from%20dqstore.in`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1ebe5d] transition"
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
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your Name" name="name" value={form.name} onChange={handleChange} required placeholder="Rajesh Kumar" />
        <Field label="Store Name" name="storeName" value={form.storeName} onChange={handleChange} required placeholder="Trends Boutique" />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectField label="Store Type" name="storeType" value={form.storeType} onChange={handleChange} options={STORE_TYPES} required />
        <Field label="City" name="city" value={form.city} onChange={handleChange} required placeholder="Chennai" />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Field
            label="Mobile Number"
            name="mobile"
            type="tel"
            value={form.mobile}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
          />
          {phoneError && (
            <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <span>⚠</span> {phoneError}
            </p>
          )}
        </div>
        <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="rajesh@trendsstore.com" />
      </div>

      {/* Row 4 */}
      <SelectField
        label="Approx. daily orders (optional)"
        name="dailyOrders"
        value={form.dailyOrders}
        onChange={handleChange}
        options={DAILY_ORDER_RANGES}
        required={false}
      />

      {error && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3 flex items-start gap-2">
          <span className="mt-0.5">⚠</span>
          <span>{error}</span>
        </p>
      )}

      <Button type="submit" size="lg" className="w-full justify-center" disabled={loading}>
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending…
          </span>
        ) : 'Request a Demo →'}
      </Button>

      <div className="flex items-center justify-center gap-4 pt-1 flex-wrap">
        <p className="text-xs text-gray-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-enterprise-blue rounded-full inline-block" />
          Response within 24 hours
        </p>
        <p className="text-xs text-gray-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-enterprise-blue rounded-full inline-block" />
          No commitment required
        </p>
        <p className="text-xs text-gray-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-enterprise-blue rounded-full inline-block" />
          Mon–Sat, 10am–7pm IST
        </p>
      </div>
    </form>
  )
}

/* ── Shared field input classes ── */
const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-enterprise-blue focus:border-transparent transition bg-white'

interface FieldProps {
  label:       string
  name:        string
  value:       string
  onChange:    (e: React.ChangeEvent<HTMLInputElement>) => void
  type?:       string
  required?:   boolean
  placeholder?: string
}

function Field({ label, name, value, onChange, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  )
}

interface SelectFieldProps {
  label:    string
  name:     string
  value:    string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options:  string[]
  required: boolean
}

function SelectField({ label, name, value, onChange, options, required }: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${inputClass} appearance-none cursor-pointer`}
      >
        <option value="">Select…</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}
