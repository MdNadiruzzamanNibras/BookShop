
const AddBook = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="flex justify-center items-center">
                    <form className="w-96 bg-base-100">
                    <div>
                        <label >Title</label>
                         <input type="text" name="title"  className="input input-bordered w-full max-w-xs my-4" />
                    </div>
                    <div>
                        <label >Author</label>
                         <input type="text" name="author"  className="input input-bordered w-full max-w-xs my-4" />
                    </div>
                    <div>
      <label>Genre</label>
      <select  name="genre" id="mySelect">
        <option value="Love">Option 1</option>
        <option value="any">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
      </select>
    </div>
                    <div>
      <label>Year</label>
      <select  name="pabulication" id="mySelect">
        <option value="2018">2018</option>
        <option value="223">2012</option>
        <option value="1023"></option>
        
      </select>
    </div>
                   
                </form>
                </div>
         </div>
        </div>
    );
};

export default AddBook;