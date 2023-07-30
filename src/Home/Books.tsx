import { useGetBooksQuery } from "../redux/api/bookapi";
import { IBook } from "../type/booktype";

const Books = () => {
    const { data, isLoading, error } = useGetBooksQuery(undefined);

    console.log(data);
    console.log(isLoading);
    console.log(error);

    if (isLoading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            {data.slice().reverse().slice(0, 10).map((book: IBook ) => (
                <div key={book._id}>
                    <p>{book.Author}</p>
                </div>
            ))}
        </div>
    );
};

export default Books;
