export default function FooterLinkButton({
  children, href
}: {
  children: React.ReactNode,
  href: string
}) {
  return (
    <a
      className='bg-white hover:bg-gray-200 text-primary block w-64 md:w-96 py-2 tracking-widest text-center font-bold'
      href={href}
      rel="noopener noreferrer"
      target='_blank'
    >
      {children}
    </a>
  )
}
