import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='px-4 lg:px-6 h-14 flex items-center'>
                <Link className='flex items-center justify-center' href='/'>
                    <span className='font-bold text-xl'>Portfolio</span>
                </Link>
                <nav className='ml-auto flex gap-4 sm:gap-6'>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/'
                    >
                        Hjem
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/om-meg'
                    >
                        Om meg
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/historie'
                    >
                        Historie
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/erfaringer'
                    >
                        Erfaringer
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='/kontakt'
                    >
                        Kontakt
                    </Link>
                </nav>
            </header>
            <main className='flex-1'>
                <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
                    <div className='container px-4 md:px-6'>
                        <div className='flex flex-col items-center space-y-4 text-center'>
                            <div className='space-y-2'>
                                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                                    Velkommen til min portfolio
                                </h1>
                                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    Jeg er en utvikler med lidenskap for å skape
                                    brukervennlige og innovative løsninger.
                                </p>
                            </div>
                            <div className='space-x-4'>
                                <Link href='/om-meg'>
                                    <Button>Lær mer om meg</Button>
                                </Link>
                                <Link href='/kontakt'>
                                    <Button variant='outline'>
                                        Kontakt meg
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
                    <div className='container px-4 md:px-6'>
                        <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
                            <div className='flex flex-col justify-center space-y-4'>
                                <div className='space-y-2'>
                                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                                        Om meg
                                    </h2>
                                    <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                                        Lær mer om min bakgrunn, ferdigheter og
                                        interesser.
                                    </p>
                                </div>
                                <div>
                                    <Link href='/om-meg'>
                                        <Button variant='link' className='p-0'>
                                            Les mer →
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center space-y-4'>
                                <div className='space-y-2'>
                                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                                        Historie
                                    </h2>
                                    <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                                        Utforsk min utdanning og karrierevei
                                        gjennom årene.
                                    </p>
                                </div>
                                <div>
                                    <Link href='/historie'>
                                        <Button variant='link' className='p-0'>
                                            Les mer →
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center space-y-4'>
                                <div className='space-y-2'>
                                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                                        Erfaringer
                                    </h2>
                                    <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                                        Se prosjektene jeg har jobbet med og
                                        mine arbeidsoppgaver.
                                    </p>
                                </div>
                                <div>
                                    <Link href='/erfaringer'>
                                        <Button variant='link' className='p-0'>
                                            Les mer →
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                    © 2025 Portfolio. Alle rettigheter reservert.
                </p>
                <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
                    <Link
                        className='text-xs hover:underline underline-offset-4'
                        href='#'
                    >
                        Personvern
                    </Link>
                    <Link
                        className='text-xs hover:underline underline-offset-4'
                        href='#'
                    >
                        Vilkår
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
