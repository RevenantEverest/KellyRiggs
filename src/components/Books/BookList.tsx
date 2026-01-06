import { MotionFadeIn } from '../common';
import BookCard from './BookCard';
import { books } from '@/data';

function BookList() {

    const renderBooks = () => {

        return books.ALL_BOOKS.map((book, index) => {
            
            return(
                <MotionFadeIn key={`book-${book.title}-${index}`}>
                    <BookCard  item={book} />
                </MotionFadeIn>
            );
        });
    };

    return(
        <div className="flex flex-col gap-20">
            <MotionFadeIn>
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-5xl font-bold">Published Works</h1>
                    <p className="font-semibold text-xl text-muted w-6/12 text-center">
                        From practical guides to real world journeys. Explore the stories and insights I&apos;ve shared with the world.
                    </p>
                </div>
            </MotionFadeIn>
            {renderBooks()}
        </div>
    );
};

export default BookList;