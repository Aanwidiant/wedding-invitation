import { SVGProps } from 'react';

const Music = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox='0 0 24 24'>
        <circle cx="8" cy="18" r="4" />
        <path d="M12 18V2l7 4" />
    </svg>
);

export default Music;
