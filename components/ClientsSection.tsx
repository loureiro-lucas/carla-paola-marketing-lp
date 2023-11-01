import Image from 'next/image'
import Client1 from '@/public/client1.webp'
import Client2 from '@/public/client2.webp'
import Client3 from '@/public/client3.webp'
import Client4 from '@/public/client4.webp'
import Client5 from '@/public/client5.webp'
import Client6 from '@/public/client6.jpg'

export default function ClientSection() {
  return (
    <section className='w-full flex flex-col'>
      <h2 className='text-4xl font-bold bg-primary text-white py-4 text-center'>
        Alguns de Nossos Clientes
      </h2>
      <div className='w-full grid grid-cols-2 md:grid-cols-6 max-w-screen-xl px-4 py-8 md:p-16 mx-auto gap-4 md:gap-2'>
        <a
          className='flex justify-center items-center'
          href='https://www.instagram.com/canalmotock/'
          rel="noopener noreferrer"
          target='_blank'
        >
          <Image
            alt='Logo do cliente Motock.'
            height={144}
            src={Client1}
            width={144}
            loading='lazy'
          />
        </a>
        <a
          className='flex justify-center items-center'
          href='https://www.instagram.com/casadorada.shop/'
          rel="noopener noreferrer"
          target='_blank'
        >
          <div className='bg-white w-[148px] h-[148px] flex justify-center items-center'>
            <Image
              alt='Logo do cliente Casadorada.'
              height={140}
              src={Client2}
              width={140}
              loading='lazy'
            />
          </div>
        </a>
        <a
          className='flex justify-center items-center'
          href='https://www.instagram.com/beltraonetoimobiliaria/'
          rel="noopener noreferrer"
          target='_blank'
        >
          <div className='bg-white w-[148px] h-[148px] flex justify-center items-center'>
            <Image
              alt='Logo do cliente Beltrão Neto.'
              height={140}
              src={Client3}
              width={140}
              loading='lazy'
            />
          </div>
        </a>
        <a
          className='flex justify-center items-center'
          href='https://www.instagram.com/cofermeta/'
          rel="noopener noreferrer"
          target='_blank'
        >
          <div className='bg-white w-[148px] h-[148px] flex justify-center items-center'>
            <Image
              alt='Logo do cliente Cofermeta.'
              height={148}
              src={Client4}
              width={148}
              loading='lazy'
            />
          </div>
        </a>
        <a
          className='flex justify-center items-center'
          href='https://www.instagram.com/umbrellapopoficial/'
          rel="noopener noreferrer"
          target='_blank'
        >
          <Image
            alt='Logo do cliente Umbrella Pop.'
            height={148}
            src={Client5}
            width={148}
            loading='lazy'
          />
        </a>
        <a
          className='flex justify-center items-center'
          href='https://www.instagram.com/dr.viniciusm/'
          rel="noopener noreferrer"
          target='_blank'
        >
          <Image
            alt='Logo do cliente Dr. Vinicius Maciel.'
            height={148}
            src={Client6}
            width={148}
            loading='lazy'
          />
        </a>
      </div>
    </section>
  )
}
