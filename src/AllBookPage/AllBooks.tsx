import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/api/bookapi";
import { IBook } from "../type/booktype";
import Loading from "../Loading/Loading"
import { useAppDispatch } from "../redux/hooks";
import { addToWish } from "../redux/wishlist/wishslice";

const AllBooks = () => {
    const { data, isLoading, error } = useGetBooksQuery(undefined);
    if (isLoading) {
        return <Loading/>
  }
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useAppDispatch()
if (!data || data.length === 0) {
        return <div>No books available. The sever is crash</div>;
    }
    console.log(data);
    console.log(error);
    return (
      <div className="container mx-auto">
        <div>
          <div className="form-control">
                    <label className="label">
                        <span className="label-text">Genre</span> 
              </label> 
              <select name="genre" required id="genre" className="input input-bordered focus:outline-none w-full p-2 rounded my-2 text-black"  >
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
                        <span className="label-text">Publication Year</span> 
              </label>
              <select name="year" className="input input-bordered focus:outline-none w-full p-2 rounded my-2 text-black" >
              <option >Select Year</option>
              <option value="2018">2018</option>
              <option value="2012">2012</option>
              <option value="2023">2023</option>
              <option value="2021">2021</option>
              <option value="2019">2019</option>
            </select>
                    
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
         
           <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr className="bg-black py-1 mt-10 text-white text-xl text-center">
        <th>NO</th> 
        <th>Title</th> 
        <th>Author</th> 
        <th>Genre</th> 
                  <th>PublicationDate</th> 
                  <th></th>
        
      </tr>
    </thead> 
                <tbody>
                    {data?.map((book: IBook, index:number)=>
                    <tr className="text-lg font-bold text-center" key={book._id}>
                        <th>{ index+1}</th> 
                            <td>{ book.Title}</td> 
                            <td>{ book.Author}</td> 
                            <td>{ book.Genre}</td> 
                        <td>{book.PublicationDate}</td> 
                        <td>
                         <Link to={`/book/${book._id}`} >
                            <button className="btn btn-primary">Details</button>
                          
                      </Link>
                          <button onClick={()=>dispatch(addToWish(book))} className="text-xs ml-2 px-2 py-1 rounded-full">add to wishlist</button> </td>
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