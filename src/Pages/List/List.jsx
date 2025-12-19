import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../../Components/Books/Book';
import { getStoreBook } from '../../utility/addToDB';

const List = () => {
    const [readList, setReadList] = useState([])
    const data = useLoaderData()
    console.log(data)
    useEffect(() =>{
        const storedBookData = getStoreBook()
        const covertStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => covertStoredBooks.includes(book.bookId))
        setReadList(myReadList) 
    },[])
    return (
        <div>
            <div className='p-4 bg-[#131313]/5 mt-5'>
                <p className='text-3xl lg:text-4xl text-center font-bold'>Books</p>
            </div>

            <Tabs className='mt-5'>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>

                <TabPanel>
                    
                    <section className='mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center'>
                    {
                        readList.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                    </section>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default List;