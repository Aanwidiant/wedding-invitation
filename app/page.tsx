import Countdown from "@/components/countdown/Countdown";
import Couple from "@/components/couple/Couple";
import Envelope from "@/components/envelope/Envelope";
import EventDetails from "@/components/event-details/EventDetails";
import Hero from "@/components/hero/Hero";
import Location from "@/components/location/Location";
import QuranVerse from "@/components/quran-verse/QuranVerse";
import Story from "@/components/story/Story";
import { wedding } from "@/data/wedding";

export default async function Home({ searchParams }: PageProps<"/">) {
    const params = await searchParams;
    const rawGuestName = params.to;
    const guestNameParam = Array.isArray(rawGuestName)
        ? rawGuestName[0]
        : rawGuestName;
    const guestName = guestNameParam?.trim()
        ? guestNameParam
        : "Tamu Undangan";

    return (
        <main className="relative flex-1 bg-background">
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
            <EventDetails
                ceremony={wedding.ceremony}
                reception={wedding.reception}
            />
            <Countdown targetDateTime={wedding.ceremony.datetime} />
            <Location
                ceremony={wedding.ceremony}
                reception={wedding.reception}
            />
            <Story items={wedding.story} />
        </main>
    );
}
