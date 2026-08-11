import CopyAccount from '@/components/gift/CopyAccount';

interface GiftData {
    bank: string;
    accountNumber: string;
    accountName: string;
    shippingAddress: string;
}

interface GiftProps {
    gift: GiftData;
    recipientName: string;
}

export default function Gift({ gift, recipientName }: GiftProps) {
    return (
        <section className='bg-surface px-6 py-20 sm:py-24'>
            {' '}
            <div className='mx-auto max-w-4xl'>
                {' '}
                <div className='text-center'>
                    {' '}
                    <p className='font-body text-secondary text-xs tracking-[0.3em] uppercase'>
                        Hadiah Pernikahan{' '}
                    </p>
                    <h2 className='font-display text-foreground mt-3 text-3xl sm:text-4xl'>
                        Tanda Kasih
                    </h2>
                    <p className='font-body text-secondary mx-auto mt-4 max-w-md leading-relaxed'>
                        Doa restu Anda adalah hadiah terindah bagi kami. Bagi yang ingin berbagi
                        tanda kasih, dapat melalui pilihan berikut.
                    </p>
                </div>
                <div className='mt-12 grid items-stretch gap-6 md:grid-cols-2 md:gap-8'>
                    <div className='border-primary-soft bg-background flex h-full flex-col rounded-3xl border px-6 py-8 text-center sm:px-8'>
                        <div className='flex flex-1 flex-col items-center justify-center'>
                            <p className='font-display text-primary text-2xl sm:text-3xl'>
                                {gift.bank}
                            </p>

                            <p className='font-body text-foreground mt-5 text-2xl tracking-[0.12em] sm:text-3xl'>
                                {gift.accountNumber}
                            </p>

                            <p className='font-body text-secondary mt-3 text-sm'>
                                a.n. {gift.accountName}
                            </p>
                        </div>

                        <div className='mt-8'>
                            <CopyAccount
                                value={gift.accountNumber}
                                buttonLabel='Salin Nomor Rekening'
                                ariaLabel={`Salin nomor rekening ${gift.accountNumber}`}
                                successMessage='Nomor rekening berhasil disalin.'
                                errorMessage='Silakan coba lagi atau salin nomor rekening secara manual.'
                            />
                        </div>
                    </div>

                    <div className='border-primary-soft bg-background flex h-full flex-col rounded-3xl border px-6 py-8 text-center sm:px-8'>
                        <div className='flex flex-1 flex-col items-center'>
                            <h3 className='font-display text-primary text-2xl sm:text-3xl'>
                                Kirim Hadiah
                            </h3>

                            <p className='font-body text-secondary mt-3 max-w-md text-sm leading-relaxed'>
                                Bagi Bapak/Ibu yang ingin memberikan hadiah dalam bentuk barang,
                                dapat mengirimkannya ke alamat berikut.
                            </p>

                            <p className='font-display text-foreground mt-6 text-xl sm:text-2xl'>
                                {recipientName}
                            </p>

                            <p className='font-body text-foreground mt-3 max-w-md text-sm leading-relaxed whitespace-pre-line sm:text-base'>
                                {gift.shippingAddress}
                            </p>
                        </div>

                        <div className='mt-8'>
                            <CopyAccount
                                value={`${recipientName}\n${gift.shippingAddress}`}
                                buttonLabel='Salin Alamat'
                                ariaLabel={`Salin alamat pengiriman hadiah untuk ${recipientName}`}
                                successMessage='Alamat berhasil disalin.'
                                errorMessage='Silakan coba lagi atau salin alamat secara manual.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
