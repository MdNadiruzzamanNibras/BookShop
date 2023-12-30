import { useNavigate, useParams } from "react-router";
import { useDeleteBookMutation, useSingleBookQuery } from "../redux/api/bookapi";
import bookImage from "../images/Fiction-Book-Covers.webp"
import ReviewDetail from "../Component/ReviewDetail";
import Loading from "../Loading/Loading";
interface IParams {
  id: string;



}
const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { data, isLoading, } = useSingleBookQuery(id)
     const [deleteBook] = useDeleteBookMutation();  
    if (isLoading) {
        return <Loading/>;
    }
   const handleDelete = async (id:IParams) => {
       try {
           const processed = window.confirm('Are you delete book')
           if (processed) {
               await deleteBook(id);
        navigate("/")
           }
        
    } catch (error) {
     
      console.error('Error deleting book:', error);
    }
  };
    
    const handleNavigate = (id: IParams) => {
         navigate(`/edit/${id}`);
    }
    return (
        <div className="container my-20 mx-auto">
            <div>
                 <div className="flex  justify-center align-middle">
            <div >
                <img className="h-80" src={bookImage} alt="" />
            </div>
            <div className="ml-10 mt-14">
                <h1 className="text-3xl font-bold ">{data?.Title}</h1>        <div >

               
                <h3 className="text-xl font-bold">Author: {data?.Author}</h3>
                <h5>Genre: { data?.Genre}</h5>
                <h5>Publication Date: {data.PublicationDate}</h5>
                <p className="w-96">{data.Description}</p>
<button className="px-8 bg-green-700 text-lg font-bold rounded-full border-2 border-black mr-12 my-6 text-white py-2" onClick={()=>handleNavigate(data?._id)}>Edit</button>
<button className="px-6 bg-red-700 text-lg font-bold rounded-full border-2 border-black  my-6 text-white py-2" onClick={()=>handleDelete(data?._id)}>Delete</button>
                     </div>
            </div>
        </div>
            </div>
            <ReviewDetail id={ data._id} />
       </div>
    );
};

export default Detail;