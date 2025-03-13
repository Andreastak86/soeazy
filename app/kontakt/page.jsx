import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
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
                <section className='w-full py-12 md:py-24 lg:py-32'>
                    <div className='container px-4 md:px-6'>
                        <div className='flex flex-col items-center gap-4 text-center'>
                            <div className='space-y-2'>
                                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                                    Kontakt meg
                                </h1>
                                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    Har du spørsmål eller ønsker å samarbeide?
                                    Ta gjerne kontakt!
                                </p>
                            </div>
                        </div>
                        <div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
                            <div className='flex flex-col gap-4'>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Kontaktinformasjon
                                        </CardTitle>
                                        <CardDescription>
                                            Du kan nå meg på følgende måter
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className='grid gap-4'>
                                        <div className='flex items-center gap-4'>
                                            <Mail className='h-5 w-5 text-gray-500' />
                                            <div className='text-sm'>
                                                eksempel@epost.no
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <Phone className='h-5 w-5 text-gray-500' />
                                            <div className='text-sm'>
                                                +47 123 45 678
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <MapPin className='h-5 w-5 text-gray-500' />
                                            <div className='text-sm'>
                                                Oslo, Norge
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className='flex gap-4'>
                                        <Button size='icon' variant='outline'>
                                            <Github className='h-4 w-4' />
                                            <span className='sr-only'>
                                                Github
                                            </span>
                                        </Button>
                                        <Button size='icon' variant='outline'>
                                            <Linkedin className='h-4 w-4' />
                                            <span className='sr-only'>
                                                LinkedIn
                                            </span>
                                        </Button>
                                        <Button size='icon' variant='outline'>
                                            <Twitter className='h-4 w-4' />
                                            <span className='sr-only'>
                                                Twitter
                                            </span>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            Send meg en melding
                                        </CardTitle>
                                        <CardDescription>
                                            Fyll ut skjemaet under, så svarer
                                            jeg så fort jeg kan
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className='grid gap-4'>
                                        <div className='grid gap-2'>
                                            <Label htmlFor='name'>Navn</Label>
                                            <Input
                                                id='name'
                                                placeholder='Ditt navn'
                                            />
                                        </div>
                                        <div className='grid gap-2'>
                                            <Label htmlFor='email'>
                                                E-post
                                            </Label>
                                            <Input
                                                id='email'
                                                placeholder='din.epost@eksempel.no'
                                                type='email'
                                            />
                                        </div>
                                        <div className='grid gap-2'>
                                            <Label htmlFor='message'>
                                                Melding
                                            </Label>
                                            <Textarea
                                                id='message'
                                                placeholder='Skriv din melding her...'
                                            />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className='w-full'>
                                            Send melding
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                    © 2024 Portfolio. Alle rettigheter reservert.
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
