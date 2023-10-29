import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookapi = createApi({
    reducerPath: 'bookapi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books"
        }),
        singleBook: builder.query({
            query: (id)=>`/book/${id}`
        }),
        review: builder.mutation({
            query: ({id, data}) => ({
                url: `review/${id}`,
                method: 'POST',
                body:data
            })
        })
    }), 
});


export const {useGetBooksQuery, useSingleBookQuery} = bookapi