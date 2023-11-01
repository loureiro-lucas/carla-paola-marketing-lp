import { Josefin_Slab } from 'next/font/google'
import FooterLinkButton from './FooterLinkButton'
import Image from 'next/image'
import Instagram from '@/public/instagram-logo.webp'
import Linkedin from '@/public/linkedin-logo.webp'

const josefinSlab = Josefin_Slab({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className='bg-primary text-white w-full flex flex-col items-center py-8 justify-center'>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <div className={josefinSlab.className}>
          <h1 className='text-center text-6xl italic tracking-wider'>
            Vamos conversar?
          </h1>
        </div>
        <FooterLinkButton href='https://bit.ly/carlapaolamkt'>
          Solicite um orçamento personalizado
        </FooterLinkButton>
        <div className='flex flex-row gap-2'>
          <a
            href="https://www.instagram.com/carlapaolaa_/"
            rel="noopener noreferrer"
            target='_blank'
          >
            <Image
              alt='Logo do Instagram'
              className='px-8 md:px-0'
              height={29}
              src={Instagram}
              width={29}
              priority
            />
          </a>
          <a
            href="https://www.linkedin.com/in/carla-paola-marketing/"
            rel="noopener noreferrer"
            target='_blank'
          >
            <Image
              alt='Logo do Linkedin'
              className='px-8 md:px-0'
              height={29}
              src={Linkedin}
              width={29}
              priority
            />
          </a>
        </div>
        <a href="mailto:carlapaola.mktdigital@gmail.com">
          <span className='text-xl'>carlapaola.mktdigital@gmail.com</span>
        </a>
      </div>
    </footer>
  )
}