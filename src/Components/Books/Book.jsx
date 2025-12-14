import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';
const Book = ({book}) => {
    
    return (
        <Link to={`/bookDetails/${book.bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-5 border-1 border-gray-300">
                <figure className='p-5 bg-[#F3F3F3] mb-5'>
                    <img
                    src={book.image}
                    className='w-500 h-100'
                    alt="Shoes" />
                </figure>
                <div className="space-y-3">
                    <div className='flex justify-center items-center gap-5'>
                        <div className='bg-[#23BE0A]/10 px-2 py-1 rounded-xl'>{book.tags[0]}</div>
                        <div className='bg-[#23BE0A]/10 px-2 py-1 rounded-xl '>{book.tags[1]}</div>
                    </div>
                    <div className='border-b-1 border-dashed pb-3'>
                        <h1 className='text-2xl'>{book.bookName}</h1>
                        <p className='text-[#131313]/80'>{book.author}</p>
                    </div>
                    <div className='text-[#131313]/80 flex justify-between items-center'>
                        <p className=''>{book.category}</p>
                        <p className='flex gap-1 justify-center items-center'>{book.rating} <Star /></p>
                    </div>
                    
                </div>
            </div>
        </Link>
    );
};

export default Book;