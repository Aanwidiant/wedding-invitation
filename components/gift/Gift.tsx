import Image from "next/image";

import CopyAccount from "@/components/gift/CopyAccount";

interface GiftData {
    bank: string;
    accountNumber: string;
    accountName: string;
    qrisImage: string;
    shippingAddress: string;
}

interface GiftProps {
    gift: GiftData;
    recipientName: string;
}

export default function Gift({ gift, recipientName }: GiftProps) {
    return (
        <section className="bg-background px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-3xl">
                <div className="text-center">
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-secondary">
                        Hadiah Pernikahan
                    </p>
                    <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                        Tanda Kasih
                    </h2>
                    <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-secondary">
                        Doa restu Anda adalah hadiah terindah bagi kami. Bagi
                        yang ingin berbagi tanda kasih, dapat melalui pilihan
                        berikut.
                    </p>
                </div>

                <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
                    <div className="text-center">
                        <p className="font-display text-2xl text-primary sm:text-3xl">
                            {gift.bank}
                        </p>
                        <p className="mt-5 font-body text-2xl tracking-[0.12em] text-foreground sm:text-3xl">
                            {gift.accountNumber}
                        </p>
                        <p className="mt-3 font-body text-sm text-secondary">
                            a.n. {gift.accountName}
                        </p>
                        <div className="mt-6">
                            <CopyAccount
                                value={gift.accountNumber}
                                buttonLabel="Salin Nomor Rekening"
                                ariaLabel={`Salin nomor rekening ${gift.accountNumber}`}
                                successMessage="Nomor rekening berhasil disalin."
                                errorMessage="Silakan coba lagi atau salin nomor rekening secara manual."
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-full max-w-xs">
                            <Image
                                src={gift.qrisImage}
                                alt="QRIS untuk memberikan hadiah pernikahan"
                                width={320}
                                height={320}
                                sizes="(min-width: 768px) 320px, 80vw"
                                className="h-auto w-full"
                            />
                        </div>
                        <p className="mt-5 font-body text-sm text-secondary">
                            Scan QRIS untuk memberikan hadiah
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-12 h-px w-16 bg-border" />

                <div className="mx-auto mt-10 max-w-xl text-center">
                    <h3 className="font-display text-2xl text-primary sm:text-3xl">
                        Kirim Hadiah
                    </h3>
                    <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-secondary">
                        Bagi Bapak/Ibu yang ingin memberikan hadiah dalam bentuk
                        barang, dapat mengirimkannya ke alamat berikut.
                    </p>
                    <p className="mt-6 font-display text-xl text-foreground sm:text-2xl">
                        {recipientName}
                    </p>
                    <p className="mx-auto mt-3 max-w-md whitespace-pre-line font-body text-sm leading-relaxed text-foreground sm:text-base">
                        {gift.shippingAddress}
                    </p>
                    <div className="mt-6">
                        <CopyAccount
                            value={`${recipientName}\n${gift.shippingAddress}`}
                            buttonLabel="Salin Alamat"
                            ariaLabel={`Salin alamat pengiriman hadiah untuk ${recipientName}`}
                            successMessage="Alamat berhasil disalin."
                            errorMessage="Silakan coba lagi atau salin alamat secara manual."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
