import { useGetBooksQuery } from "../redux/api/bookapi";
import { IBook } from "../type/booktype";
import bookImage from "../images/Fiction-Book-Covers.webp"
const Books = () => {
    const { data, isLoading, error } = useGetBooksQuery(undefined);

    console.log(data);
    console.log(isLoading);
    console.log(error);

    if (isLoading) {
        return <div>Loading...</div>;
    }


  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl my-6 ">Books Collection</h1>
        <div className="grid grid-cols-3 gap-2">
            {data.slice().reverse().slice(0, 10).map((book: IBook ) => (
               
                    
            
                     <div  key={book._id} className="card card-compact w-60 bg-base-100 shadow-xl mx-auto my-12">
  <figure style={{height:'300px'}}><img  src={bookImage} alt="Shoes" /></figure>
  <div className="card-body">
                  <h2 className="card-title">{book.Title}</h2>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
                  
               
            ))}
        </div>
      </div>
    );
};

export default Books;
