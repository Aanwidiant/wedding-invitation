import type { Metadata } from 'next';
import './globals.css';
import { Amiri, Cormorant_Garamond, Great_Vibes, Lora } from 'next/font/google';
import { wedding } from '@/data/wedding';

const cormorant = Cormorant_Garamond({
    variable: '--font-cormorant',
    subsets: ['latin'],
});

const greatVibes = Great_Vibes({
    weight: '400',
    variable: '--font-great-vibes',
    subsets: ['latin'],
});

const lora = Lora({
    variable: '--font-lora',
    subsets: ['latin'],
});

const amiri = Amiri({
    weight: ['400', '700'],
    variable: '--font-amiri',
    subsets: ['arabic'],
});

const groomFirstName = wedding.groom.name.split(' ')[0];
const brideFirstName = wedding.bride.name.split(' ')[0];

export const metadata: Metadata = {
    metadataBase: new URL('https://rudinandifa.suroso-tech.my.id'),

    title: `Undangan Pernikahan ${groomFirstName} & ${brideFirstName}`,
    description: `Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan ${groomFirstName} dan ${brideFirstName} pada ${wedding.date}.`,

    openGraph: {
        title: `Undangan Pernikahan ${groomFirstName} & ${brideFirstName}`,
        description: `Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan ${groomFirstName} dan ${brideFirstName} pada ${wedding.date}.`,
        images: [
            {
                url: '/og-image.jpg',
                width: 2731,
                height: 2731,
                alt: `Undangan Pernikahan ${groomFirstName} & ${brideFirstName}`,
            },
        ],
        type: 'website',
    },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang='id'
            className={`${cormorant.variable} ${greatVibes.variable} ${lora.variable} ${amiri.variable} h-full antialiased`}
        >
            <body className='flex min-h-full flex-col'>{children}</body>
        </html>
    );
}
