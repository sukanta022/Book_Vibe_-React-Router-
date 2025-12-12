import React from 'react';
import { useLoaderData } from 'react-router';
import Book from './Book';

const Books = () => {
    const bookData = useLoaderData();
    
    return (
        <div className='lg:w-11/12 mx-auto mt-10'>
            <p className='text-4xl font-bold text-center mb-5'>Books</p>
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center'>
                {
                    bookData.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </section>
        </div>
    );
};

export default Books;