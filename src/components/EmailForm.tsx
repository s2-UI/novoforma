import SampleEmail from '@/emails/SampleEmail'
import { render } from '@react-email/components'

const EmailForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { name, phone, email, message } = Object.fromEntries(formData)

    const finalHtml = await render(<SampleEmail userFirstname={name as string} />, {
      pretty: true,
    })

    const finalText = await render(<SampleEmail userFirstname={name as string} />, {
      plainText: true,
    })

    try {
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
        alert('Email sent!')
      } else {
        alert('Failed to send email')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      className='space-y-4'
      onSubmit={handleSubmit}
    >
      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <label
            htmlFor='nombre'
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
            className='bg-zinc-800 text-primary-50 border-zinc-700 rounded-sm p-2 w-full'
          />
        </div>
        <div className='space-y-2'>
          <label
            htmlFor='apellido'
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
            className='bg-zinc-800 text-primary-50 border-zinc-700 rounded-sm p-2 w-full'
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
          className='bg-zinc-800 text-primary-50 border-zinc-700 rounded-sm p-2'
        />
      </div>
      <div className='space-y-2 flex flex-col'>
        <label
          htmlFor='mensaje'
          className='text-white'
        >
          Mensaje
        </label>
        <textarea
          required
          name='message'
          className='min-h-[100px] bg-zinc-800 text-primary-50 border-zinc-700 p-2 rounded-sm'
          id='message'
          placeholder='Tu mensaje'
        ></textarea>
      </div>
      <button className='w-full bg-primary-600 text-primary-50 hover:bg-primary-700 rounded-sm p-2'>
        Enviar Mensaje
      </button>
    </form>
  )
}

export default EmailForm
