import Image from 'next/image'
import Service1 from '@/public/service1.webp'
import Service2 from '@/public/service2.webp'
import Service3 from '@/public/service3.webp'


export default function ServicesSection() {
  return (
    <section className='w-full flex flex-col'>
      <h2 className='text-4xl font-bold bg-primary text-white py-4 text-center'>
        Serviços Oferecidos
      </h2>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 max-w-screen-xl px-4 py-8 md:px-16 md:py-12 mx-auto gap-8 md:gap-2 text-center'>
        <div className='flex flex-col items-center w-80 mx-auto'>
          <Image
            alt='Ilustração de um gráfico de barras e linhas.'
            className='mb-4'
            height={144}
            src={Service1}
            width={144}
            loading='lazy'
          />
          <p>
            Potencialize sua visibilidade online com o Tráfego Pago!
          </p>
          <p>
            Alcance seu público-alvo rapidamente e aumente suas oportunidades.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center w-80 mx-auto'>
          <Image
            alt='Ilustração com um megafone e ícones de redes sociais.'
            className='mb-4'
            height={144}
            src={Service2}
            width={144}
            loading='lazy'
          />
          <p>
            Criação de conteúdo estratégico, que interagem com sua audiência e impulsiona sua presença online. 
          </p>
        </div>
        <div className='flex flex-col justify-center items-center w-80 mx-auto'>
          <Image
            alt='Ilustração de um computador em uma página de busca, e uma lupa.'
            className='mb-4'
            height={144}
            src={Service3}
            width={144}
            loading='lazy'
          />
          <p>
            Colocamos sua empresa no mapa!<br />Com o Google Meu Negócio, maximizamos sua visibilidade local, conquistando clientes próximos.
          </p>
        </div>
      </div>
    </section>
  )
}
