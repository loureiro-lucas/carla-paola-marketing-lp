import Hero from '@/public/hero.webp'
import Image from 'next/image'
import LinkButton from './LinkButton'

export default function HeroSection() {
  return (
    <section className='w-full flex justify-center md:p-8 md:pb-0'>
      <div className='w-full flex flex-col md:flex-row items-bottom justify-between max-w-screen-lg md:min-w-[900px]'>
        <Image
            alt='Foto de Carla Paola, sorrindo, usando uma camisa azul.'
            className='px-8 md:px-0 pt-4 md:pt-0'
            height={508}
            src={Hero}
            width={381}
            loading='lazy'
        />
        <div className='md:w-[31rem] flex flex-col gap-2'>
          <h2 className='text-4xl font-bold bg-primary md:bg-transparent text-white md:text-inherit py-4 md:py-0 text-center md:text-left'>
            Sobre mim
          </h2>
          <p className='mx-6 mt-6 md:mx-0 md:mt-0'>
            Me chamo Carla Paola, tenho 25 anos e sou estrategista de marketing de conteúdo.
          </p>
          <p className='mx-6 md:mx-0'>
            Com <strong>mais de 4 anos de experiência</strong> na área de comunicação, apaixonada e experiente em impulsionar marcas além dos limites convencionais, combino criatividade com conteúdo educativo e informativo, visando engajar e atingir a persona ideal.
          </p>
          <p className='mx-6 md:mx-0'>
            Ao longo de minha jornada, alcancei e alcanço realizações notáveis, como o <strong>aumento nas taxas de conversão</strong> e o <strong>crescimento da base de clientes</strong>.
          </p>
          <p className='mx-6 md:mx-0'>
            Minha missão é alavancar sua empresa alcançando resultados através das redes sociais.
          </p>
          <div className='w-full flex justify-center mt-4 mb-6 md:mt-2 md:mb-4'>
            <LinkButton href='https://bit.ly/carlapaolamkt'>
              Entre em contato!
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}