import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookapi = createApi({
    reducerPath: 'bookapi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books"
        }),
    }), 
});


export const {useGetBooksQuery} = bookapi