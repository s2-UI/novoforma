import { useState } from 'react'
import SampleEmail from '@/emails/SampleEmail'
import { render } from '@react-email/components'

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const { name, phone, email, message: userMessage } = Object.fromEntries(formData)

    try {
      const finalHtml = await render(<SampleEmail userFirstname={name as string} />, {
        pretty: true,
      })

      const finalText = await render(<SampleEmail userFirstname={name as string} />, {
        plainText: true,
      })

      const res = await fetch('/api/sendEmail.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'info@novoformaserveis.es',
          to: [email],
          subject: `Gracias ${name} por contactarnos - Novoforma`,
          html: finalHtml,
          text: finalText,
        }),
      })

      if (res.ok) {
        setMessage({ type: 'success', text: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' })
        ;(e.target as HTMLFormElement).reset()
      } else {
        setMessage({ type: 'error', text: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' })
      }
    } catch (error) {
      console.error(error)
      setMessage({ type: 'error', text: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      className='space-y-4'
      onSubmit={handleSubmit}
    >
      {message && (
        <div
          className={`p-3 rounded-sm ${
            message.type === 'success' ? 'bg-green-900/50 text-green-100' : 'bg-red-900/50 text-red-100'
          }`}
        >
          {message.text}
        </div>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <label
            htmlFor='name'
            className='text-white'
          >
            Nombre
          </label>
          <input
            required
            id='name'
            name='name'
            placeholder='Tu nombre'
            type='text'
            className='bg-zinc-800 text-primary-50 border-zinc-700 rounded-sm p-2 w-full outline-none focus:border-primary-600 focus:border-2 transition-colors'
            disabled={isLoading}
          />
        </div>
        <div className='space-y-2'>
          <label
            htmlFor='phone'
            className='text-white'
          >
            Teléfono
          </label>
          <input
            required
            id='phone'
            name='phone'
            type='tel'
            placeholder='Tu teléfono'
            className='bg-zinc-800 text-primary-50 border-zinc-700 rounded-sm p-2 w-full outline-none focus:border-primary-600 focus:border-2 transition-colors'
            disabled={isLoading}
          />
        </div>
      </div>
      <div className='space-y-2 flex flex-col'>
        <label
          htmlFor='email'
          className='text-white'
        >
          Correo Electrónico
        </label>
        <input
          required
          id='email'
          name='email'
          placeholder='tu@email.com'
          type='email'
          className='bg-zinc-800 text-primary-50 border-zinc-700 rounded-sm p-2 outline-none focus:border-primary-600 focus:border-2 transition-colors'
          disabled={isLoading}
        />
      </div>
      <div className='space-y-2 flex flex-col'>
        <label
          htmlFor='message'
          className='text-white'
        >
          Mensaje
        </label>
        <textarea
          required
          name='message'
          className='min-h-[100px] bg-zinc-800 text-primary-50 border-zinc-700 p-2 rounded-sm outline-none focus:border-primary-600 focus:border-2 transition-colors resize-none'
          id='message'
          placeholder='Tu mensaje'
          disabled={isLoading}
        ></textarea>
      </div>
      <button
        type='submit'
        className='w-full bg-primary-600 text-primary-50 hover:bg-primary-700 rounded-sm p-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
        disabled={isLoading}
      >
        {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  )
}

export default EmailForm
