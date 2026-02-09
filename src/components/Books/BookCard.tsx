import type { Book } from '@/data/books';

import { FaCheck } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '../ui/card';

interface BookProps {
    item: Book
};

function BookCard({ item }: BookProps) {

    const { 
        title, 
        subtitle, 
        coverUrl, 
        shopUrl, 
        description, 
        takeAways, 
        secondDescription
    } = item;

    const renderTakeAways = () => {
        return takeAways.map((take, index) => (
            <div 
                key={`takeAway-${take}-${index}-${title}`}
                className="flex gap-3 items-center text-lg font-semibold my-1"
            >
                <FaCheck className="text-primary text-3xl" />
                <p>{take}</p>
            </div>
        ));
    };

    return(
        <Card>
        <CardContent className="text-text py-5">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-15 items-center">
            <div className="flex flex-col justify-center items-center gap-5 pt-5 lg:pt-0">
                <div className="w-60 h-90 flex overflow-hidden">
                    <img
                        className="shrink-0 relative object-cover w-full h-full rounded-lg"
                        src={coverUrl} 
                        alt={title}
                    />
                </div>
                <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                    <Button>
                        Buy Now
                    </Button>
                </a>
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl lg:text-4xl font-bold text-accent">{title}</h1>
                    <p className="font-semibold text-muted text-lg lg:text-2xl">{subtitle}</p>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="font-semibold text-md lg:text-lg text-center lg:text-left">{description}</p>
                    <div>
                        <p className="font-bold text-2xl mb-2 text-center lg:text-left">Learn how to:</p>
                        {renderTakeAways()}
                    </div>
                    <p className="font-semibold text-md lg:text-lg text-center lg:text-left">{secondDescription}</p>
                </div>
            </div>
        </div>
        </CardContent>
        </Card>
    );
};

export default BookCard;
