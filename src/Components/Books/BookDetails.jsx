import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams()
    const ID = parseInt(id)
    const books = useLoaderData()
    const bookData = books.find(book => book.bookId === ID)
    console.log(bookData)
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center mt-8'>
            <div className='lg:w-1/2 flex justify-center items-center'>
                <div className='p-5 lg:p-15 bg-[#F3F3F3]'>
                    <img className='h-100 lg:h-140 w-100' src={bookData.image} alt="" />
                </div>
                
            </div>
            
            <div className='lg:w-1/2 space-y-3'>
                <h1 className='text-3xl lg:text-4xl font-bold'>{bookData.bookName}</h1>
                <p className='text-[#131313]/80'>By: {bookData.author}</p>
                <p className='text-xl border-t-2 border-b-2 border-gray-300 py-3'>Fiction</p>
                <p className='mt-4 text-[#131313]/70'><span className='font-bold'>Review: </span>{bookData.review}</p>
                <div className='flex  items-center gap-5 text-xl border-b-2 border-gray-300 py-4'>
                        <p className='font-bold'>Tags: </p>
                        <div className='bg-[#23BE0A]/10 px-2 py-1 rounded-xl'>{bookData.tags[0]}</div>
                        <div className='bg-[#23BE0A]/10 px-2 py-1 rounded-xl '>{bookData.tags[1]}</div>
                </div>

                <div className='space-y-4 mt-5'>
                    <p className='flex space-x-5'><span className='text-[#131313]/70'>Number of pages : </span> <span className='font-semibold'>{bookData.totalPages}</span></p>

                    <p className='flex space-x-20'><span className='text-[#131313]/70'>Publisher : </span> <span className='font-semibold'>{bookData.publisher}</span></p>


                    <p className='flex space-x-5'><span className='text-[#131313]/70'>Year of Publishing : </span> <span className='font-semibold'>{bookData.yearOfPublishing}</span></p>

                    <p className='flex space-x-25'><span className='text-[#131313]/70'>Rating : </span> <span className='font-semibold'>{bookData.rating}</span></p>
                </div>
                <div className='flex justify-center lg:justify-self-start gap-5 mt-10'>
                    <button className='btn p-5'>Read</button>
                    <button className='btn p-5 bg-[#50B1C9]'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;