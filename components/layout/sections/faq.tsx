import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question:
            'How can I ensure the best results when watermarking multiple images?',
        answer: 'For the best results, make sure all images in the folder are of the same size. This ensures uniformity in the watermark placement and appearance across all your images.',
        value: 'item-1',
    },
    {
        question:
            'Will the speed of batch watermarking be consistent on all devices?',
        answer: 'The speed of batch watermarking may vary depending on the specifications of your device, such as processor speed, RAM, and available storage. Higher-end devices typically process images faster than lower-end ones.',
        value: 'item-2',
    },
    {
        question:
            'Is there a limit to the number of images I can watermark at once?',
        answer: "There is no strict limit, but the performance may be affected by the number of images and the device's capabilities. We recommend processing a reasonable batch size for optimal performance.",
        value: 'item-3',
    },
    {
        question: 'Do I need an internet connection to use the app?',
        answer: 'No, our app works completely offline for watermarking images. However, an internet connection is required when you need to enter a license key to activate premium features.',
        value: 'item-4',
    },
    {
        question: 'How can I contact support if I encounter issues?',
        answer: "You can reach out to our support team through the 'Help' section within the app or by emailing us directly at support@yourapp.com. We're here to assist you with any questions or concerns.",
        value: 'item-5',
    },
];

export const FAQSection = () => {
    return (
        <section id='faq' className='container md:w-[700px] py-24 sm:py-32'>
            <div className='text-center mb-8'>
                <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
                    FAQS
                </h2>

                <h2 className='text-3xl md:text-4xl text-center font-bold'>
                    Common Questions
                </h2>
            </div>

            <Accordion type='single' collapsible className='AccordionRoot'>
                {FAQList.map(({ question, answer, value }) => (
                    <AccordionItem key={value} value={value}>
                        <AccordionTrigger className='text-left'>
                            {question}
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};
