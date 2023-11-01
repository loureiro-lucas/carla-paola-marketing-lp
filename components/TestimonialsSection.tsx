import Image from 'next/image'
import { QuotationMarks } from './QuotationMarksSVG'



export default function TestimonialsSection() {
  return (
    <section className='w-full flex flex-col'>
      <h2 className='text-4xl font-bold bg-primary text-white py-4 text-center'>
        Depoimentos
      </h2>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 max-w-screen-xl px-4 py-8 md:px-16 md:py-12 mx-auto gap-8 md:gap-2 text-center'>

        <div className='bg-primary text-white flex flex-col items-center justify-between w-80 mx-auto p-8 h-80'>
          <h3
            className='text-2xl font-bold'
          >
            Leonardo
          </h3>
          <q className='font-light italic'>
            A Carla é uma ótima profissional, depois que contratei seus serviços minha empresa deu um salto na internet aumentando minha visibilidade e meu faturamento mensal. Super indico!
          </q>
          <QuotationMarks />
        </div>

        <div className='bg-primary text-white flex flex-col items-center justify-between w-80 mx-auto p-8 h-80'>
          <h3
            className='text-2xl font-bold'
          >
            Vinicius
          </h3>
          <q className='font-light italic'>
            Excelente profissional, em pouco tempo conseguiu alavancar o alcance das minhas redes sociais e também aumentando o alcance do meu consultório odontológico com a sua gestão de tráfego.
          </q>
          <QuotationMarks />
        </div>

        <div className='bg-primary text-white flex flex-col items-center justify-between w-80 mx-auto p-8 h-80'>
          <h3
            className='text-2xl font-bold'
          >
            Amanda
          </h3>
          <q className='font-light italic'>
            Atenciosa e educada,  tem muita paciência e pró-atividade na hora de elaborar os posts.<br/>A cada nova postagem ela surge com novas ideias e não se limita só a um modelo fixo!
          </q>
          <QuotationMarks />
        </div>

      </div>
    </section>
  )
}
