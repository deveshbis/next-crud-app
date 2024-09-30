import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getBooks = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/books", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch books");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading books: ", error);
    }
};

const BookCard = async () => {
    const { books } = await getBooks();

    return (

        <div className='grid grid-cols-3 gap-3'>
            {
                books.map(b => (<ul key={b.id}>
                    <h1>{b.name}</h1>
                    <button className='border border-solid'>add to bookmark</button>
                </ul>))
            }

        </div>

    );
};

export default BookCard;
