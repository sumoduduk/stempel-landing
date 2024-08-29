import { icons } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';

interface FeaturesProps {
    icon: string;
    title: string;
    description: string;
}

const featureList: FeaturesProps[] = [
    {
        icon: 'Zap',
        title: 'Ultra-Fast Watermarking',
        description:
            'Experience the ease of quickly adding watermarks to your photos in just a blink of an eye, saving you precious time.',
    },
    {
        icon: 'Lock',
        title: 'Offline Protection',
        description:
            'Keep your images secure by working completely offline, ensuring your personal data remains private and protected.',
    },
    {
        icon: 'Settings',
        title: 'User-Friendly Interface',
        description:
            'Navigate our simple and straightforward app interface designed for ease of use, making it accessible for everyone.',
    },
    {
        icon: 'Image',
        title: 'High-Quality Results',
        description:
            'Maintain the quality of your images with our clear and crisp watermarking process, ensuring your photos look their best.',
    },
    {
        icon: 'Rows3',
        title: 'Batch Processing',
        description:
            'Effortlessly manage multiple images at once with our batch processing feature, streamlining your workflow efficiently.',
    },
    {
        icon: 'CircleHelp',
        title: 'Helpful Support',
        description:
            'Receive assistance whenever you need it with our dedicated support team, ready to help you with any questions or issues.',
    },
];

export const FeaturesSection = () => {
    return (
        <section id='features' className='container py-24 sm:py-32'>
            <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
                Features
            </h2>

            <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
                What Makes Us Different
            </h2>

            <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8'>
                We stand out by providing a swift and secure method to mark your
                photos, ensuring they are protected without the need for
                internet connection. It’s a simple yet powerful tool for those
                who value both speed and privacy.,
            </h3>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {featureList.map(({ icon, title, description }) => (
                    <div key={title}>
                        <Card className='h-full bg-background border-0 shadow-none'>
                            <CardHeader className='flex justify-center items-center'>
                                <div className='bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4'>
                                    <Icon
                                        name={icon as keyof typeof icons}
                                        size={24}
                                        color='hsl(var(--primary))'
                                        className='text-primary'
                                    />
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className='text-muted-foreground text-center'>
                                {description}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};
