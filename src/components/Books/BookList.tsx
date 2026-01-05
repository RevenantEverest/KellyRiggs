import BookCard from './BookCard';
import { books } from '@/data';

function BookList() {

    const renderBooks = () => {

        return books.ALL_BOOKS.map((book, index) => {
            
            return(
                <div key={`book-${book.title}-${index}`}>
                    <BookCard  item={book} />
                </div>
            );
        });
    };

    return(
        <div className="flex flex-col gap-20">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-5xl font-bold">Published Works</h1>
                <p className="font-semibold text-xl text-muted w-6/12 text-center">
                    From practical guides to real world journeys. Explore the stories and insights I&apos;ve shared with the world.
                </p>
            </div>
            {renderBooks()}
        </div>
    );
};

export default BookList;