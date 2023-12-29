import { ChangeEvent, FormEvent, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { useBookAddMutation } from "../redux/api/bookapi";


const AddBook = () => {
    const [bookAdd ] = useBookAddMutation()
    const [title, setTitle] = useState<string | undefined>(""); 
    const [author, setAuthor] = useState<string | undefined>("");
    const [genre, setGenre] = useState<string | undefined>("");
    const [year, setYear] = useState<string | undefined>("");
   const { user, } = useAppSelector(state => state.user)
 

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    
       e.preventDefault();
    const options = {
          authorEmail:user?.email,
            Title: title,
            Author: author,
            Genre:  genre ,
            PublicationDate: year !== undefined ? parseInt(year) : undefined 
        }
        
    bookAdd(options);
    console.log(bookAdd);
        
        
  }
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setTitle(e.target.value);
};

const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
  setAuthor(e.target.value);
};

const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
  setGenre(e.target.value);
};

const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
  setYear(e.target.value);
};

    
  return (
    <form onSubmit={handleSubmit} className="pb-5 px-8 grid grid-cols-12 gap-4">
       <div className="lg:col-span-3 col-span-6"></div>
       <div className="lg:col-span-6 col-span-12">
       <div className="">
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Name</span> 
                    </label> 
              <input 
                required
                    type="text" 
                    placeholder="Book name"  
                    className="input input-bordered focus:outline-none w-full p-2 rounded my-2 text-black"  onChange={handleTitleChange}
                    />
                </div>
            </div>  
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Author</span> 
                    </label> 
                    <input type="text" required placeholder="Book author"  className="input input-bordered w-full p-2 focus:outline-none rounded my-2 text-black" onChange={handleAuthorChange}/>
                </div>
            </div>
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Genre</span> 
              </label> 
              <select name="genre" required id="genre" className="input input-bordered focus:outline-none w-full p-2 rounded my-2 text-black" onChange={handleGenreChange} >
                <option >Select Genre</option>
              <option value="Love">Love</option>
              <option value="Adventure">Adventure</option>
              <option value="Mystery">Mystery</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Fantasy">Fantasy</option>
            </select>
                   
                </div>
            </div> 
             <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Publication Year</span> 
              </label>
              <select name="year" className="input input-bordered focus:outline-none w-full p-2 rounded my-2 text-black" onChange={handleYearChange}>
              <option >Select Year</option>
              <option value="2018">2018</option>
              <option value="2012">2012</option>
              <option value="2023">2023</option>
              <option value="2021">2021</option>
              <option value="2019">2019</option>
            </select>
                    
                </div>
            </div>  
            
            <div className="col-span-12">
                <button type="submit" className="px-4 py-2 bg-black text-white">Add New</button>
            </div>
        </div> 
       </div>
    <div className="lg:col-span-3 col-span-12"></div>
    </form>
  )
}

export default AddBook