interface FooterProps {
    groomName: string;
    brideName: string;
    date: string;
}

function firstName(fullName: string) {
    return fullName.trim().split(' ')[0];
}

export default function Footer({ groomName, brideName, date }: FooterProps) {
    return (
        <footer className='bg-background px-6 py-20 sm:py-24'>
            <div className='mx-auto flex max-w-2xl flex-col items-center text-center'>
                <p
                    className='font-body text-secondary text-xs tracking-[0.3em] uppercase'
                    data-aos='fade-up'
                    data-aos-duration='600'
                >
                    Terima Kasih
                </p>

                <h2
                    className='font-display text-foreground mt-6 text-3xl sm:text-4xl'
                    data-aos='fade-up'
                    data-aos-duration='700'
                    data-aos-delay='100'
                >
                    {firstName(groomName)}
                    <span className='font-script text-primary mx-3 text-3xl sm:text-4xl'>&</span>
                    {firstName(brideName)}
                </h2>

                <p
                    className='font-body text-secondary mt-5 max-w-md text-sm leading-relaxed sm:text-base'
                    data-aos='fade-up'
                    data-aos-duration='700'
                    data-aos-delay='150'
                >
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                    berkenan hadir dan memberikan doa restu untuk pernikahan kami.
                </p>

                <p className='font-display text-primary mt-7 text-base tracking-wide sm:text-lg'>
                    {date}
                </p>

                <div className='bg-border mt-10 h-px w-10' />

                <p
                    className='font-body text-secondary/70 mt-6 text-xs tracking-wide'
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='200'
                >
                    Created by Suroso Tech
                </p>
            </div>
        </footer>
    );
}
