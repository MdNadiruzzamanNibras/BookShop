import { useAppSelector } from "../redux/hooks";
import { IBook } from "../type/booktype";

const WishList = () => {
    const { books } = useAppSelector((state) => state.wish);
    console.log(books);
    return (
        <div className="container mx-auto">
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
                  
        
      </tr>
              
              )
     }
      
      
    </tbody>
  </table>
</div>
      </div>
       </div>
    );
};

export default WishList;