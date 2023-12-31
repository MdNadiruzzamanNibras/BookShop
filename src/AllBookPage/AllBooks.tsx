import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/api/bookapi";
import { IBook } from "../type/booktype";
import Loading from "../Loading/Loading"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToWish } from "../redux/wishlist/wishslice";

import { ChangeEvent, useEffect, useState } from "react";
import { setBooks, setGenre, setPublicationYear, setSearchQuery } from "../redux/filterdata/filterSlice";

const AllBooks = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch()
    const { data, isLoading,  } = useGetBooksQuery(undefined);
  const [searchText, setSearchText] = useState('');
   const { publicationYear, genre, searchQuery } = useAppSelector((state) => state.filter);
  const books = useAppSelector((state) => state.filter.books);
  useEffect(() => {
      dispatch(setBooks(data));
        }
    , [data, dispatch]);
  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(e.target.value);
    console.log(typeof selectedYear,"ls");
    dispatch(setPublicationYear(selectedYear));
  };

   
  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
  const selectedGenre = e.target.value;
    dispatch(setGenre(selectedGenre));

  };
   const handleSearch = () => {
    dispatch(setSearchQuery(searchText));
  };

  
  let filteredBooks = [...books];
  

  if (publicationYear) {
    filteredBooks = filteredBooks.filter((book) => book.PublicationDate = publicationYear);
  }

  if (genre) {
    filteredBooks = filteredBooks.filter((book) => book.Genre === genre);
  }

  if (searchQuery) {
    filteredBooks = filteredBooks.filter((book) =>
      book.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  console.log(publicationYear);
  if (isLoading) {
        return <Loading/>
  }
if (!filteredBooks || filteredBooks.length === 0) {
        return <div>No books available. The sever is crash</div>;
    }
   
    return (
      <div className="container mx-auto">
        <div className="flex justify-around text-center my-10">
          <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Search by Genre</span> 
              </label> 
              <select name="genre" required id="genre" className="input input-bordered focus:outline-none  p-2 rounded my-2 text-black" onChange={handleGenreChange} >
                <option >Select Genre</option>
              <option value="Love">Love</option>
              <option value="Adventure">Adventure</option>
              <option value="Mystery">Mystery</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Fantasy">Fantasy</option>
            </select>
                   
          </div>
          
           <div className="form-control">
                    <label className="label">
                        <span className="label-text">Search by Publication Year</span> 
              </label>
              <select name="year" className="input input-bordered focus:outline-none  p-2 rounded my-2 text-black" onChange={handleYearChange} >
              <option >Select Year</option>
              <option value="2018">2018</option>
              <option value="2012">2012</option>
              <option value="2023">2023</option>
              <option value="2021">2021</option>
              <option value="2019">2019</option>
            </select>
                    
          </div>
          <div className="form-control">
      <label className="label-text mb-5" >Search by Name:</label>
            <div className="flex items-center">
              <input
                type="text"
                className="input input-bordered focus:outline-none  p-2 rounded my-2 text-black"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="px-6 py-3 text-base ml-3 rounded-lg bg-black text-white " onClick={handleSearch}>Search</button>
      </div>
    </div>

        </div>
        <div>
         
           <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr className="bg-black py-1 mt-10 text-white lg:text-xl text-center">
        <th>NO</th> 
        <th>Title</th> 
        <th>Author</th> 
        <th>Genre</th> 
                  <th>PublicationDate</th> 
                  <th></th>
        
      </tr>
    </thead> 
                <tbody>
                    {filteredBooks?.map((book: IBook, index:number)=>
                    <tr className="lg:text-lg font-bold text-center" key={book._id}>
                        <th>{ index+1}</th> 
                            <td>{ book?.Title}</td> 
                            <td>{ book?.Author}</td> 
                            <td>{ book?.Genre}</td> 
                        <td>{book?.PublicationDate}</td> 
                        <td>
                         <Link to={`/book/${book._id}`} >
                            <button className="bg-green-400 text-white text-base px-4 py-1 rounded-full">Details</button>
                          
                      </Link>
                          <button onClick={()=>dispatch(addToWish(book))} className="bg-black ml-4 text-white text-base px-4 py-1 rounded-full">add to wishlist</button> </td>
      </tr>
                    
                    )}
      
      </tbody>
  </table>
</div>
        </div>
       </div>
    );
};

export default AllBooks;