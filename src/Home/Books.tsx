import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/api/bookapi";
import { IBook } from "../type/booktype";
import { useAppDispatch } from "../redux/hooks";
import { addToWish } from "../redux/wishlist/wishslice";
import Loading from "../Loading/Loading";

// import { Link } from "react-router-dom";
const Books = () => {
    const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(data);

    console.log(isLoading);
    console.log(error);

    if (isLoading) {
        return <Loading/>;
    }
  if (!data || data.length === 0) {
    return isLoading
      
    }
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useAppDispatch()
   
    const books = [...data].reverse();

  
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl my-6 ">Books Collection</h1>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-black py-1 text-white lg:text-xl text-center">
        <th></th>
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>Publication Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
            {
              books.slice(0, 10).map((book:IBook, index) =>
              
               <tr className="lg:text-lg font-bold text-center" key={book._id}>
                  <th>{index + 1 }</th>
                  <td>{book.Title }</td>
                  <td>{book.Author }</td>
                  <td>{book.Genre }</td>
                  <td>{book.PublicationDate}</td>
                   <td>
                  <Link to={`/book/${book._id}`} >
                     <button className="bg-green-400 text-white text-base px-4 py-1 rounded-full">Details</button>
                    </Link>
                    <button onClick={()=>dispatch(addToWish(book))} className="bg-black ml-4 text-white text-base px-4 py-1 rounded-full">add to wishlist</button>
                    </td>
        
      </tr>
              
              )
     }
      
      
    </tbody>
  </table>
</div>
      </div>
    );
};

export default Books;
