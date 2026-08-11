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
        <footer className='border-border bg-surface border-t px-6 py-20 sm:py-24'>
            <div className='mx-auto flex max-w-2xl flex-col items-center text-center'>
                <p className='font-body text-secondary text-xs tracking-[0.3em] uppercase'>
                    Terima Kasih
                </p>

                <h2 className='font-display text-foreground mt-6 text-3xl sm:text-4xl'>
                    {firstName(groomName)}
                    <span className='font-script text-primary mx-3 text-3xl sm:text-4xl'>&</span>
                    {firstName(brideName)}
                </h2>

                <p className='font-body text-secondary mt-5 max-w-md text-sm leading-relaxed sm:text-base'>
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                    berkenan hadir dan memberikan doa restu untuk pernikahan kami.
                </p>

                <p className='font-display text-primary mt-7 text-base tracking-wide sm:text-lg'>
                    {date}
                </p>

                <div className='bg-border mt-10 h-px w-10' />

                <p className='font-body text-secondary/70 mt-6 text-xs tracking-wide'>
                    Created by Suroso Tech
                </p>
            </div>
        </footer>
    );
}
