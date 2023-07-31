import { useGetBooksQuery } from "../redux/api/bookapi";
import { IBook } from "../type/booktype";


const AllBooks = () => {
    const { data, isLoading, error } = useGetBooksQuery(undefined);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(data);
    console.log(error);
    return (
        <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>Index</th> 
        <th>Title</th> 
        <th>Author</th> 
        <th>Genre</th> 
        <th>PublicationDate</th> 
        
      </tr>
    </thead> 
                <tbody>
                    {data.map((book: IBook, index:number)=>
                    <tr key={book._id}>
                        <th>{ index+1}</th> 
                            <td>{ book.Title}</td> 
                            <td>{ book.Author}</td> 
                            <td>{ book.Genre}</td> 
                            <td>{book.PublicationDate }</td> 
        
      </tr>
                    
                    )}
      
      </tbody>
  </table>
</div>
    );
};

export default AllBooks;