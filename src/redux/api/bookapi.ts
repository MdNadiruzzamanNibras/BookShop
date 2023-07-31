import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookapi = createApi({
    reducerPath: 'bookapi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://bookshop-backend-git-main-mdnadiruzzamannibras.vercel.app" }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books"
        }),
        singleBook: builder.query({
            query: (id)=>`/book/${id}`
        }),
    }), 
});


export const {useGetBooksQuery, useSingleBookQuery} = bookapi