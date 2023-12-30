import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookapi = createApi({
    reducerPath: 'bookapi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://bookshop-backend-xj0p.onrender.com/" }),
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
            
        }),
        bookEdit: builder.mutation({
            query: ({id, data}) => ({
                url: `edit/${id}`,
                method: 'PUT',
                body:data
            }),
            
        }),
        getReview: builder.query({
            query: (id) => `/review/${id}`,
            providesTags:['reviews']
        }),
        deleteBook: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: 'DELETE',
      }),
      
    }),

    }), 
});


export const {useGetBooksQuery, useSingleBookQuery, useGetReviewQuery, useReviewMutation, useBookAddMutation, useBookEditMutation, useDeleteBookMutation} = bookapi