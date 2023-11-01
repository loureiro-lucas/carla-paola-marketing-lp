import { SVGProps } from 'react'

export const QuotationMarks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 450 366'
    width='2rem'
    height='2rem'
    {...props}
  >
    <path
      id='a'
      fill='#fff'
      d='M97 0q56 0 89.5 45T220 149q0 67-56 136.5T11 366L0 331q59-12 94-56t35-85q0-20-8-31.5T101 147Q7 147 7 69q0-27 23.5-48T97 0z'
    />
    <use xlinkHref='#a' transform='translate(230)' />
  </svg>
)