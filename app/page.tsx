import Countdown from '@/components/countdown/Countdown';
import Couple from '@/components/couple/Couple';
import Envelope from '@/components/envelope/Envelope';
import EventDetails from '@/components/event-details/EventDetails';
import Gallery from '@/components/gallery/Gallery';
import Gift from '@/components/gift/Gift';
import Hero from '@/components/hero/Hero';
import QuranVerse from '@/components/quran-verse/QuranVerse';
import Story from '@/components/story/Story';
import Footer from '@/components/footer/Footer';
import { wedding } from '@/data/wedding';
import { AudioProvider } from '@/components/audio/AudioProvider';
import AudioButton from '@/components/audio/AudioButton';
import AOSProvider from '@/components/aos/AOSProvider';

export default async function Home({ searchParams }: PageProps<'/'>) {
    const params = await searchParams;

    const rawGuestName = params.to;
    const guestNameParam = Array.isArray(rawGuestName) ? rawGuestName[0] : rawGuestName;

    const guestName = guestNameParam?.trim()
        ? guestNameParam
            .trim()
            .split('-')
            .filter(Boolean)
            .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
            .join(' ')
        : 'Tamu Undangan';

    return (
        <AudioProvider src={wedding.audio.wedding}>
            <AOSProvider>
                <main className='bg-background relative flex-1'>
                    <Envelope
                        guestName={guestName}
                        groomName={wedding.groom.name}
                        brideName={wedding.bride.name}
                    />
                    <Hero
                        groomName={wedding.groom.name}
                        brideName={wedding.bride.name}
                        date={wedding.date}
                        imageSrc={wedding.photos.hero}
                    />
                    <QuranVerse
                        arabic={wedding.quote.arabic}
                        latin={wedding.quote.latin}
                        translation={wedding.quote.translation}
                        reference={wedding.quote.reference}
                    />
                    <Couple groom={wedding.groom} bride={wedding.bride} />
                    <EventDetails ceremony={wedding.ceremony} reception={wedding.reception} />
                    <Countdown
                        targetDateTime={wedding.reception.datetime}
                        location={wedding.reception.location}
                        mapsUrl={wedding.reception.mapsUrl}
                    />
                    <Story items={wedding.story} />
                    <Gallery items={wedding.gallery} />
                    <Gift gift={wedding.gift} recipientName={`${wedding.groom.fullname}`} />
                    <Footer
                        groomName={wedding.groom.name}
                        brideName={wedding.bride.name}
                        date={wedding.date}
                    />
                    <AudioButton />
                </main>
            </AOSProvider>
        </AudioProvider>
    );
}
