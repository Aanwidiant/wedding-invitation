export const wedding = {
    groom: {
        name: "Muhammad Fajar Pratama",
        parents: {
            father: "Bapak Haryanto",
            mother: "Ibu Siti Aminah",
        },
    },

    bride: {
        name: "Aisyah Putri Ramadhani",
        parents: {
            father: "Bapak Ahmad Fauzi",
            mother: "Ibu Nurhayati",
        },
    },

    date: "Minggu, 20 Desember 2026",

    ceremony: {
        date: "Minggu, 20 Desember 2026",
        time: "08.00 WIB",
        location: "Masjid Al-Ikhlas, Yogyakarta",
        // Explicit ISO 8601 timestamp (with the WIB / UTC+7 offset) used as
        // a machine-readable target for the countdown. The `date`/`time`
        // fields above remain the human-readable strings used for display
        // and are not parsed programmatically.
        datetime: "2026-12-20T08:00:00+07:00",
    },

    reception: {
        date: "Minggu, 20 Desember 2026",
        time: "11.00–14.00 WIB",
        location: "Gedung Serbaguna Yogyakarta",
    },

    mapsUrl: "https://maps.google.com/?q=Masjid+Al-Ikhlas+Yogyakarta",

    quote: {
        arabic:
            "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ",
        latin: "Wa min āyātihī an khalaqa lakum min anfusikum azwājal litaskunū ilaihā wa ja'ala bainakum mawaddataw wa raḥmah, inna fī żālika la'āyātil liqaumiy yatafakkarụn.",
        translation:
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
        reference: "QS. Ar-Rum: 21",
    },

    photos: {
        // Temporary development placeholder. Replace with the couple's
        // real pre-wedding photograph when available.
        hero: "/images/placeholders/hero-couple.jpg",
    },

    gift: {
        bank: "BCA",
        accountNumber: "1234567890",
        accountName: "Muhammad Fajar Pratama",
        qrisImage: "/images/qris/qris.png",
    },
} as const;

export type Wedding = typeof wedding;
