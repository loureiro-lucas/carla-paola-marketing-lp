export default function LinkButton({
  children, href
}: {
  children: React.ReactNode,
  href: string
}) {
  return (
    <a
      className='bg-primary hover:bg-primary/90 text-white block w-56 py-2 tracking-widest text-center'
      href={href}
      rel="noopener noreferrer"
      target='_blank'
    >
      {children}
    </a>
  )
}
