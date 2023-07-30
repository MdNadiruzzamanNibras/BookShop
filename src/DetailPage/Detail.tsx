import { useParams } from "react-router";


const Detail = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            
        </div>
    );
};

export default Detail;