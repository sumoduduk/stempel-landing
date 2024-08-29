import { icons } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';

interface BenefitsProps {
    icon: string;
    title: string;
    description: string;
}

const benefitList: BenefitsProps[] = [
    {
        icon: 'Blocks',
        title: 'Data Security',
        description:
            'Rest easy knowing your image data is fully protected offline. Our desktop application ensures your sensitive content remains secure without any risk of online exposure.',
    },
    {
        icon: 'Clock',
        title: 'Save Time with Stempel',
        description:
            'Safeguard your digital assets effortlessly. Our app ensures your images are watermarked at warp speed, protecting your content from unauthorized use.',
    },
    {
        icon: 'Wallet',
        title: 'Boost Productivity',
        description:
            'Revolutionize your workflow with our ultra-fast watermarking tool. Achieve more in less time, allowing you to focus on growing your business.',
    },
    {
        icon: 'Sparkle',
        title: 'Simplify Your Process',
        description:
            'Say goodbye to tedious watermarking tasks. Our app streamlines the process, making it easier than ever to protect and share your images with confidence.',
    },
];

export const BenefitsSection = () => {
    return (
        <section id='benefits' className='container py-24 sm:py-32'>
            <div className='grid lg:grid-cols-2 place-items-center lg:gap-24'>
                <div>
                    <h2 className='text-lg text-primary mb-2 tracking-wider'>
                        Benefits
                    </h2>

                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                        Save Time With Stempel
                    </h2>
                    <p className='text-xl text-muted-foreground mb-8'>
                        Introducing Lightning-Fast Watermarking! Effortlessly
                        stamp 100 images in less than a second with our
                        blazingly fast desktop app. Protect your image in a
                        flash, boost productivity, and save your time!
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 gap-4 w-full'>
                    {benefitList.map(({ icon, title, description }, index) => (
                        <Card
                            key={title}
                            className='bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number'
                        >
                            <CardHeader>
                                <div className='flex justify-between'>
                                    <Icon
                                        name={icon as keyof typeof icons}
                                        size={32}
                                        color='hsl(var(--primary))'
                                        className='mb-6 text-primary'
                                    />
                                    <span className='text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30'>
                                        0{index + 1}
                                    </span>
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className='text-muted-foreground'>
                                {description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
