import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

export const FooterSection = () => {
    return (
        <footer id='footer' className='container py-24 sm:py-32'>
            <div className='p-10 bg-card border border-secondary rounded-2xl'>
                <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8'>
                    <div className='col-span-full xl:col-span-2'>
                        <Link href='#' className='flex font-bold items-center'>
                            <h3 className='text-2xl'>Stempel</h3>
                        </Link>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3 className='font-bold text-lg'>Contact</h3>
                        <div>
                            <Link
                                href='#'
                                className='opacity-60 hover:opacity-100'
                            >
                                Twitter
                            </Link>
                        </div>

                        <div>
                            <Link
                                href='#'
                                className='opacity-60 hover:opacity-100'
                            >
                                Instagram
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3 className='font-bold text-lg'>Download</h3>
                        <div>
                            <Link
                                href='#'
                                className='opacity-60 hover:opacity-100'
                            >
                                MacOS
                            </Link>
                        </div>

                        <div>
                            <Link
                                href='#'
                                className='opacity-60 hover:opacity-100'
                            >
                                Windows
                            </Link>
                        </div>

                        <div>
                            <Link
                                href='#'
                                className='opacity-60 hover:opacity-100'
                            >
                                Linux
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h3 className='font-bold text-lg'>Help</h3>
                        <div>
                            <Link
                                href='#'
                                className='opacity-60 hover:opacity-100'
                            >
                                Contact Us
                            </Link>
                        </div>

                        <div>
                            <Link
                                href='#'
                                className='opacity-60 hover:opacity-100'
                            >
                                FAQ
                            </Link>
                        </div>

                        <div>
                            <Link
                                href='#'
                                className='opacity-60 hover:opacity-100'
                            >
                                Feedback
                            </Link>
                        </div>
                    </div>

                    {/*     <div className='flex flex-col gap-2'> */}
                    {/*         <h3 className='font-bold text-lg'>Socials</h3> */}
                    {/*         <div> */}
                    {/*             <Link */}
                    {/*                 href='#' */}
                    {/*                 className='opacity-60 hover:opacity-100' */}
                    {/*             > */}
                    {/*                 Twitch */}
                    {/*             </Link> */}
                    {/*         </div> */}
                    {/**/}
                    {/*         <div> */}
                    {/*             <Link */}
                    {/*                 href='#' */}
                    {/*                 className='opacity-60 hover:opacity-100' */}
                    {/*             > */}
                    {/*                 Discord */}
                    {/*             </Link> */}
                    {/*         </div> */}
                    {/**/}
                    {/*         <div> */}
                    {/*             <Link */}
                    {/*                 href='#' */}
                    {/*                 className='opacity-60 hover:opacity-100' */}
                    {/*             > */}
                    {/*                 Dribbble */}
                    {/*             </Link> */}
                    {/*         </div> */}
                    {/*     </div> */}
                </div>

                <Separator className='my-6' />
                <section className=''>
                    <h3 className=''>
                        &copy; {new Date().getFullYear()} Brought to you by
                        <div className='text-primary transition-all border-primary hover:border-b-2 ml-1 font-semibold'>
                            Stempel Inc.
                        </div>
                    </h3>
                </section>
            </div>
        </footer>
    );
};
