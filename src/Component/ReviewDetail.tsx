import { ChangeEvent, FormEvent, useState } from "react";
import { useGetReviewQuery, useReviewMutation } from "../redux/api/bookapi";


interface IProps {
  id: string;
}
const ReviewDetail = ({ id }: IProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const {data, isLoading} = useGetReviewQuery(id, {refetchOnMountOrArgChange:true, pollingInterval:30000})
   const [review, {isError}] =  useReviewMutation()

console.log(id);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const options = {
            id: id,
            data: {review: inputValue}
        }
      review(options)
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
    if (isLoading) {
    <p>Loading...</p>
    }
    console.log(data?.reviews, "data");
    if (isError) {
        <p>some wrong</p>
    }
    return (
          <div className="container mx-auto mt-5">
        <div className="ml-0 lg:ml-[350px]">
          <form className="flex  items-center" onSubmit={handleSubmit}>
        <input
          className=" w-[500px] rounded-l-full py-2 border-2 border-black"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="rounded-r-full bg-black text-white capitalize py-2  px-4 text-xl"
        >
         add review
        </button>
      </form>
      </div>
      <div className="mt-6">
        {data?.reviews?.map((r:{ review: string }, index:number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <div className="avatar">
    <div className="w-12">
      
    </div>
  </div>
            <div className="lg:ml-80">
               <p className="text-2xl font-semibold text-gray-600">{r?.review}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ReviewDetail;