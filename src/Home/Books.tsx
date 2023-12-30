import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/api/bookapi";
import { IBook } from "../type/booktype";

// import { Link } from "react-router-dom";
const Books = () => {
    const { data, isLoading, error } = useGetBooksQuery(undefined);


    console.log(isLoading);
    console.log(error);

    if (isLoading) {
        return <div>Loading...</div>;
    }
  if (!data || data.length === 0) {
    return isLoading
      
    }

   
    const books = [...data].reverse();

  
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl my-6 ">Books Collection</h1>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
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
              
               <tr key={book._id}>
                  <th>{index + 1 }</th>
                  <td>{book.Title }</td>
                  <td>{book.Author }</td>
                  <td>{book.Genre }</td>
                  <td>{book.PublicationDate}</td>
                   <td>
                  <Link to={`/book/${book._id}`} >
                     <button className="btn btn-primary">Details</button>
                    </Link>
                    <button className="text-xs ml-2 px-2 py-1 rounded-full">add to wishlist</button>
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
