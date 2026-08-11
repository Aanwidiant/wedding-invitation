export const wedding = {
    groom: {
        name: "Rudianto",
        parents: {
            father: "Bapak Ngadiyono",
            mother: "Ibu Samirah",
        },
    },

    bride: {
        name: "Nandifa Ayu Chandrasari, S.T.",
        parents: {
            father: "Bapak Fajar Suryono",
            mother: "Ibu Istik Nafiyati",
        },
    },

    date: "Minggu, 23 Agustus 2026",

    ceremony: {
        date: "Minggu, 23 Agustus 2026",
        time: "08.00 WIB",
        location: "Kalidengen II, Kalidengen, Temon, Kulon Progo",
        mapsUrl: "https://maps.google.com/?q=Masjid+Al-Ikhlas+Yogyakarta",
        datetime: "2026-12-20T08:00:00+07:00",
    },

    reception: {
        date: "Senin, 24 Agustus 2026",
        time: "10.00 - Selesai WIB",
        location: "Talunombo, Sidomulyo, Pengasih, Kulon, Progo",
        mapsUrl: "https://maps.google.com/?q=Gedung+Serbaguna+Yogyakarta",
    },

    quote: {
        arabic:
            "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ",
        latin: "Wa min āyātihī an khalaqa lakum min anfusikum azwājal litaskunū ilaihā wa ja'ala bainakum mawaddataw wa raḥmah, inna fī żālika la'āyātil liqaumiy yatafakkarụn.",
        translation:
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
        reference: "QS. Ar-Rum: 21",
    },

    photos: {
        hero: "/images/placeholders/hero-couple.jpg",
    },

    story: [
        {
            date: "2019",
            title: "Pertama Bertemu",
            description:
                "Kami pertama kali bertemu di sebuah acara kampus di Yogyakarta dan mulai saling mengenal lewat obrolan-obrolan sederhana.",
            image: "/images/placeholders/story-meeting.jpg",
            alt: "Pasangan berjalan bersama di bawah cahaya sore kota",
        },
        {
            date: "2021",
            title: "Memulai Hubungan",
            description:
                "Setelah dua tahun menjalin komunikasi dan kebersamaan, kami memutuskan untuk memulai hubungan yang lebih serius.",
            image: "/images/placeholders/story-relationship.jpg",
            alt: "Pasangan berjalan berdua di bawah payung pada malam hari",
        },
        {
            date: "2024",
            title: "Lamaran",
            description:
                "Dengan restu kedua orang tua, kami resmi bertunangan dan mulai mempersiapkan langkah menuju pernikahan.",
            image: "/images/placeholders/story-engagement.jpg",
            alt: "Pasangan berada di dekat dekorasi lamaran bernuansa romantis",
        },
        {
            date: "2026",
            title: "Menuju Pernikahan",
            description:
                "Kini kami siap melangkah ke jenjang pernikahan dan memohon doa restu dari Bapak/Ibu/Saudara/i sekalian.",
            image: "/images/placeholders/story-wedding.jpg",
            alt: "Pasangan menikmati pemandangan bersama menjelang hari pernikahan",
        },
    ],

    gallery: [
        {
            src: "/images/placeholders/gallery-1.jpg",
            alt: "Pengantin memegang buket bunga di tengah lapangan",
            width: 800,
            height: 1000,
        },
        {
            src: "/images/placeholders/gallery-2.jpg",
            alt: "Buket bunga putih pengantin",
            width: 800,
            height: 1000,
        },
        {
            src: "/images/placeholders/gallery-3.jpg",
            alt: "Dekorasi kursi dan bunga di area akad",
            width: 1000,
            height: 667,
        },
        {
            src: "/images/placeholders/gallery-4.jpg",
            alt: "Gerbang bunga dan lorong dekorasi pernikahan",
            width: 1000,
            height: 667,
        },
        {
            src: "/images/placeholders/gallery-5.jpg",
            alt: "Penataan meja dengan bunga dan lilin",
            width: 800,
            height: 800,
        },
        {
            src: "/images/placeholders/gallery-6.jpg",
            alt: "Meja resepsi dengan rangkaian bunga",
            width: 1000,
            height: 667,
        },
    ],

    gift: {
        bank: "BCA",
        accountNumber: "1234567890",
        accountName: "Muhammad Fajar Pratama",
        qrisImage: "/images/placeholders/qris-placeholder.svg",
        shippingAddress:
            "Jl. Melati No. 24, RT 03/RW 05\nKelurahan Suryatmajan, Kecamatan Danurejan\nKota Yogyakarta, DI Yogyakarta 55213",
    },
} as const;

export type Wedding = typeof wedding;
