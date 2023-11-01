import Image from 'next/image'
import Logo from '@/public/logo.webp'
import { Josefin_Slab } from 'next/font/google'

const josefinSlab = Josefin_Slab({ subsets: ['latin'] })

export default function Header() {
  return (
    <header className='bg-white w-full flex flex-col items-center py-8'>
      <Image
        alt='Logo de Carla Paola Marketing.'
        className='px-8 md:px-0'
        height={69}
        src={Logo}
        width={297}
        priority
      />
      <div className={josefinSlab.className}>
        <h1 className='text-center text-3xl'>
          Você está pronto para levar seu negócio para o próximo nível?
        </h1>
      </div>
    </header>
  )
}