import { useAppSelector } from "../redux/hooks";

const WishList = () => {
    const { books } = useAppSelector((state) => state.wish);
    console.log(books);
    return (
        <div>
            
        </div>
    );
};

export default WishList;