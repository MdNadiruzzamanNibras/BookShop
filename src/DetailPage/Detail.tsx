import { useParams } from "react-router";
import { useSingleBookQuery } from "../redux/api/bookapi";
import bookImage from "../images/Fiction-Book-Covers.webp"
import ReviewDetail from "../Component/ReviewDetail";

const Detail = () => {
    const { id } = useParams();
    const { data, isLoading, } = useSingleBookQuery(id)
    if (isLoading) {
        return <div>Loading...</div>;
    }
   
    return (
        <div className="container mx-auto">
            <div>
                 <div className="flex  justify-center align-middle">
            <div >
                <img className="h-80" src={bookImage} alt="" />
            </div>
            <div className="ml-10 mt-14">
                <h1 className="text-3xl font-bold ml-14">{data.Title}</h1>        <div className="mt-6">

               
                <h3 className="text-xl font-bold">Author: {data.Author}</h3>
                <h5>Genre: { data.Genre}</h5>
                <h5>Publication Date: {data.PublicationDate}</h5>
                <p className="w-96">{data.Description}</p>

                     </div>
            </div>
        </div>
            </div>
            <ReviewDetail id={ data._id} />
       </div>
    );
};

export default Detail;