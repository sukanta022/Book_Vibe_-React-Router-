import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import Home from '../Pages/Home/Home';
import BookDetails from '../Components/Books/BookDetails';
import List from '../Pages/List/List';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children : [
        {
            index: true , 
            loader: () => fetch('/bookData.json'),
            Component: Home
        },
        {
            path : '/Listed_Books',
            loader: () => fetch('/bookData.json'),
            Component : List
        },
        {
            path: '/bookDetails/:id',
            loader: () => fetch('/bookData.json'),
            Component: BookDetails
        }
    ]
  },
  
]);