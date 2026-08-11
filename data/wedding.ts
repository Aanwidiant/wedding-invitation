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
    },

    reception: {
        date: "Minggu, 20 Desember 2026",
        time: "11.00–14.00 WIB",
        location: "Gedung Serbaguna Yogyakarta",
    },

    mapsUrl: "https://maps.google.com/?q=Masjid+Al-Ikhlas+Yogyakarta",

    gift: {
        bank: "BCA",
        accountNumber: "1234567890",
        accountName: "Muhammad Fajar Pratama",
        qrisImage: "/images/qris/qris.png",
    },
} as const;

export type Wedding = typeof wedding;
