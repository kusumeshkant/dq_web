'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WEB3FORMS_KEY, STORE_TYPES, DAILY_ORDER_RANGES, BARCODE_OPTIONS } from '@/lib/constants'
import { CTA } from '@/lib/site'
import Button from '@/components/ui/Button'

interface FormData {
  name:        string
  storeName:   string
  storeType:   string
  city:        string
  mobile:      string
  email:       string
  barcodes:    string
  dailyOrders: string
  software:    string
}

type FieldName = keyof FormData
type Errors = Partial<Record<FieldName, string>>

const INITIAL: FormData = {
  name: '', storeName: '', storeType: '', city: '', mobile: '', email: '', barcodes: '', dailyOrders: '', software: '',
}

// Order matters: it is the order fields appear in, used to focus the first error.
const FIELD_ORDER: FieldName[] = ['name', 'storeName', 'storeType', 'city', 'mobile', 'email', 'barcodes', 'dailyOrders', 'software']

// Hidden attribution fields, read from the landing URL. Never shown to the user.
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
type AttributionKey = (typeof UTM_KEYS)[number] | 'page' | 'referrer'
type Attribution = Partial<Record<AttributionKey, string>>

const INDIA_PHONE_RE = /^(\+91|91)?[6-9]\d{9}$/
const EMAIL_RE       = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const WA_APPLY = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to apply as a DQ founding store.")}`

function validate(form: FormData): Errors {
  const errors: Errors = {}
  if (!form.name.trim())      errors.name      = 'Enter your name'
  if (!form.storeName.trim()) errors.storeName = 'Enter your store name'
  if (!form.storeType)        errors.storeType = 'Choose your store type'
  if (!form.city.trim())      errors.city      = 'Enter your city'
  const digits = form.mobile.replace(/\s|-/g, '')
  if (!digits)                           errors.mobile = 'Enter your mobile number'
  else if (!INDIA_PHONE_RE.test(digits)) errors.mobile = 'Enter a valid 10-digit Indian mobile number'
  if (!form.email.trim())                     errors.email = 'Enter your email address'
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Enter a valid email address'
  if (!form.barcodes)         errors.barcodes  = 'Tell us whether your products have barcodes'
  return errors
}

export default function ContactForm() {
  const [form, setForm]               = useState<FormData>(INITIAL)
  const [errors, setErrors]           = useState<Errors>({})
  const [attribution, setAttribution] = useState<Attribution>({})
  const [submitted, setSubmitted]     = useState(false)
  const [loading, setLoading]         = useState(false)
  const [error, setError]             = useState('')
  const formRef                       = useRef<HTMLFormElement>(null)
  const uid                           = useId()
  const idFor = (name: FieldName) => `${uid}-${name}`

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const found: Attribution = { page: window.location.pathname }
    if (document.referrer) found.referrer = document.referrer.slice(0, 200)
    for (const k of UTM_KEYS) {
      const v = params.get(k)
      if (v) found[k] = v.slice(0, 120)
    }
    setAttribution(found)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as FieldName]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    const first = FIELD_ORDER.find(f => found[f])
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(idFor(first))}`)?.focus()
      return
    }
    setLoading(true)
    setError('')

    const attributionLines = Object.entries(attribution).map(([k, v]) => `${k}: ${v}`)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject:    `DQ Founding Store Application — ${form.storeName || form.name} (${form.city})`,
          from_name:  'DQ Store Website',
          name:       form.name,
          email:      form.email,
          ...attribution,
          message: [
            `Name: ${form.name}`,
            `Store Name: ${form.storeName}`,
            `Store Type: ${form.storeType}`,
            `City: ${form.city}`,
            `Mobile: ${form.mobile}`,
            `Email: ${form.email}`,
            `Products have barcodes: ${form.barcodes}`,
            `Bills per day: ${form.dailyOrders || 'Not specified'}`,
            `Current billing software: ${form.software || 'Not specified'}`,
            '',
            ...attributionLines,
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
      <div className="text-center py-12" role="status">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-enterprise-action" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Application received!</h3>
        <p className="text-ink-body text-sm mb-1">We&apos;ll call you within 24 hours, Mon–Sat 10am–7pm IST.</p>
        <p className="text-ink-muted text-sm mb-6">
          Or email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-enterprise-action font-medium">
            {CONTACT_EMAIL}
          </a>
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20just%20applied%20as%20a%20founding%20store%20on%20dqstore.in`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp-deep text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    )
  }

  const common = (name: FieldName) => ({
    id: idFor(name),
    name,
    value: form[name],
    error: errors[name],
    errorId: `${idFor(name)}-error`,
    onChange: handleChange,
  })

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
      <p className="text-sm text-ink-body">DQ suits stores with barcoded products and shoppers with Android phones.</p>
      <p className="text-sm text-ink-muted">Fields marked <span className="text-danger" aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your name" required placeholder="Rajesh Kumar" autoComplete="name" {...common('name')} />
        <Field label="Store name" required placeholder="Demo Store" autoComplete="organization" {...common('storeName')} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectField label="Store type" required options={STORE_TYPES} {...common('storeType')} />
        <Field label="City" required placeholder="Chennai" autoComplete="address-level2" {...common('city')} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Mobile number" type="tel" required placeholder="+91 98765 43210" autoComplete="tel" {...common('mobile')} />
        <Field label="Email address" type="email" required placeholder="rajesh@example.com" autoComplete="email" {...common('email')} />
      </div>

      <SelectField label="Do your products have barcodes or tags?" required options={BARCODE_OPTIONS} {...common('barcodes')} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectField label="Approx. bills per day (optional)" required={false} options={DAILY_ORDER_RANGES} {...common('dailyOrders')} />
        <Field label="Current billing software (optional)" placeholder="e.g. Tally, Marg, GoFrugal" {...common('software')} />
      </div>

      {Object.entries(attribution).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}

      {error && (
        <p role="alert" className="text-sm text-danger bg-red-50 border border-red-100 rounded-xl px-4 py-3 flex items-start gap-2">
          <span className="mt-0.5" aria-hidden="true">⚠</span>
          <span>{error}</span>
        </p>
      )}

      <Button type="submit" size="lg" className="w-full justify-center" disabled={loading}>
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending…
          </span>
        ) : `${CTA.primary} →`}
      </Button>

      <p className="text-center text-sm text-ink-body">
        Prefer WhatsApp?{' '}
        <a href={WA_APPLY} target="_blank" rel="noopener noreferrer" className="font-semibold text-whatsapp-deep hover:underline underline-offset-2">
          Apply on WhatsApp instead
        </a>
      </p>

      <ul className="flex items-center justify-center gap-4 pt-1 flex-wrap text-sm text-ink-muted">
        <li>Response within 24 hours</li>
        <li aria-hidden="true">·</li>
        <li>No card, no contract</li>
        <li aria-hidden="true">·</li>
        <li>Mon–Sat, 10am–7pm IST</li>
      </ul>
    </form>
  )
}

/* ── Shared field input classes ── */
const inputClass =
  'w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-enterprise-action focus:border-transparent transition bg-white'

interface BaseFieldProps {
  id:        string
  label:     string
  name:      FieldName
  value:     string
  required?: boolean
  error?:    string
  errorId:   string
}

function Label({ id, label, required }: { id: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}
      {required && <span className="text-danger ml-0.5" aria-hidden="true">*</span>}
    </label>
  )
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null
  return (
    <p id={id} className="text-sm text-danger mt-1.5 flex items-center gap-1">
      <span aria-hidden="true">⚠</span> {error}
    </p>
  )
}

interface FieldProps extends BaseFieldProps {
  onChange:      (e: React.ChangeEvent<HTMLInputElement>) => void
  type?:         string
  placeholder?:  string
  autoComplete?: string
}

function Field({ id, label, name, value, onChange, type = 'text', required, placeholder, autoComplete, error, errorId }: FieldProps) {
  return (
    <div>
      <Label id={id} label={label} required={required} />
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`${inputClass} ${error ? 'border-danger' : 'border-gray-300'}`}
      />
      <ErrorText id={errorId} error={error} />
    </div>
  )
}

interface SelectFieldProps extends BaseFieldProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options:  readonly string[]
}

function SelectField({ id, label, name, value, onChange, options, required, error, errorId }: SelectFieldProps) {
  return (
    <div>
      <Label id={id} label={label} required={required} />
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${inputClass} ${error ? 'border-danger' : 'border-gray-300'} appearance-none cursor-pointer pr-10`}
        >
          <option value="">Select…</option>
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" aria-hidden="true" />
      </div>
      <ErrorText id={errorId} error={error} />
    </div>
  )
}
