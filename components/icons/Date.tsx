import { SVGProps } from 'react';

const Date = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        viewBox='0 0 24 24'
    >
        <path d='M8 2v3' />
        <path d='M16 2v3' />
        <rect x='3' y='3' width='18' height='18' rx='2' />
        <path d='M3 9h18' />
    </svg>
);

export default Date;
