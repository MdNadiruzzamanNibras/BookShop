import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookapi = createApi({
    reducerPath: 'bookapi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes:['reviews'],
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
            }),
            invalidatesTags:['reviews']
        }),
        bookAdd: builder.mutation({
            query: (data) => ({
                url: 'addnew',
                method: 'POST',
                body:data
            }),
            invalidatesTags:['reviews']
        }),
        getReview: builder.query({
            query: (id) => `/review/${id}`,
            providesTags:['reviews']
        }),

    }), 
});


export const {useGetBooksQuery, useSingleBookQuery, useGetReviewQuery, useReviewMutation, useBookAddMutation} = bookapi