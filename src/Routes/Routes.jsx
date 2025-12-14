import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import Home from '../Pages/Home/Home';
import BookDetails from '../Components/Books/BookDetails';

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
            path: '/bookDetails/:id',
            loader: () => fetch('/bookData.json'),
            Component: BookDetails
        }
    ]
  },
  
]);