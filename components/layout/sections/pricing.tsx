import { Check, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

enum PopularPlan {
    NO = 0,
    YES = 1,
}

interface PlanProps {
    title: 'Free' | 'Premium Monthly' | 'Premium+ Annualy';
    popular: PopularPlan;
    price: number;
    buttonText: string;
    benefitList: string[];
}

const plans: PlanProps[] = [
    {
        title: 'Free',
        popular: 0,
        price: 0,
        buttonText: 'Download',
        benefitList: ['Batch Watermark', ' '],
    },
    {
        title: 'Premium Monthly',
        popular: 1,
        price: 5,
        buttonText: 'Buy Monthly License',
        benefitList: ['Batch Watermark', 'Upto 1 device'],
    },
    {
        title: 'Premium+ Annualy',
        popular: 0,
        price: 32,
        buttonText: 'Buy Annual License',
        benefitList: ['Batch Watermark', 'Upto 3 device'],
    },
];

export const PricingSection = () => {
    return (
        <section className='container py-24 sm:py-32'>
            <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
                Pricing
            </h2>

            <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
                Choose Your Plan and Protect Your Images with Ease
            </h2>

            <hr className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14' />

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4'>
                {plans.map(
                    ({ title, popular, price, buttonText, benefitList }) => (
                        <Card
                            key={title}
                            className={
                                popular === PopularPlan?.YES
                                    ? 'drop-shadow-xl shadow-black/10 mx-8 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]'
                                    : 'border-[1.5px] border-gray lg:scale-[1.1]'
                            }
                        >
                            <CardHeader>
                                <CardTitle className='pb-2'>{title}</CardTitle>

                                <div>
                                    {title === 'Premium+ Annualy' && (
                                        <span className='text-3xl text-muted-foreground font-semibold line-through mr-2'>
                                            {' '}
                                            $60{' '}
                                        </span>
                                    )}
                                    <span className='text-3xl font-bold'>
                                        ${price}
                                    </span>
                                    <span className='text-muted-foreground'>
                                        {title === 'Premium+ Annualy'
                                            ? '/year'
                                            : '/month'}
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className='flex py-16'>
                                <div className='space-y-4'>
                                    {benefitList.map((benefit) => (
                                        <span key={benefit} className='flex'>
                                            {benefit.length < 2 ? (
                                                <X className='text-red-500 mr-2 invisible' />
                                            ) : title === 'Free' ? (
                                                <X className='text-red-500 mr-2' />
                                            ) : (
                                                <Check className='text-primary mr-2' />
                                            )}
                                            <h3>{benefit}</h3>
                                        </span>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    variant={
                                        popular === PopularPlan?.YES
                                            ? 'default'
                                            : 'secondary'
                                    }
                                    className='w-full'
                                >
                                    {buttonText}
                                </Button>
                            </CardFooter>
                        </Card>
                    ),
                )}
            </div>
        </section>
    );
};
