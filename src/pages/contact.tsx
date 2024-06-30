import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { useRef } from 'react'
import { sendEmail } from '../utils/emailJS'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const getFormData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea')
    const formData: { [key: string]: string } = {}

    inputs.forEach((input) => {
      if (input.name) {
        formData[input.name.toLowerCase()] = input.value
      }
    })

    sendEmail(formData)

    return formData
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) {
      return
    }

    const formData = getFormData(form.current)

    console.log(formData)
  }

  return (
    <div className="z-0 h-[100vh] flex  ]  items-center justify-center">
      <div className="w-[400px] py-10 flex flex-col items-center justify-center  ">
        <h1 id="outer">
          <h1
            id="inner"
            className="effect-shine md:text-6xl text-5xl md:my-6 my-2 text-black font-Bebas"
          >
            Let's talk
          </h1>
        </h1>
        <form
          onSubmit={handleSubmit}
          ref={form}
          className=" flex flex-col gap-3 items-end justify-center"
        >
          <Input text="Name" />
          <Input text="Company" />
          <Input text="Phone" />
          <Input text="Email" type="email" />

          <TextArea text="Message" />
          <button
            type="submit"
            className="px-12 py-1 text-xl m-auto rounded-lg my-4 text-white bg-primary shadow-md shadow-black/30  hover:bg-emerald-800  transition duration-200"
          >
            Submit
          </button>
        </form>
        <p>
          Or send me a direct email: to{' '}
          <a
            href="mailto:mars77@gmail.com"
            target="_blank"
            className="text-primary/70 hover:text-primary"
          >
            mars77@gmail.com
          </a>{' '}
        </p>
      </div>
    </div>
  )
}

export default Contact
