import Envelope from "@/components/envelope/Envelope";
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
        </main>
    );
}
