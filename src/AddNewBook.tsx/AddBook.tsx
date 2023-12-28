

const AddBook = () => {
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("add book");
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="border p-2 w-full rounded-md"
              placeholder="Enter the book title"
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              className="border p-2 w-full rounded-md"
              placeholder="Enter the author's name"
            />
          </div>
          <div>
            <label htmlFor="genre">Genre</label>
            <select name="genre" id="genre" className="border p-2 w-full rounded-md">
              <option value="Love">Love</option>
              <option value="Adventure">Adventure</option>
              <option value="Mystery">Mystery</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <select name="year" id="year" className="border p-2 w-full rounded-md">
              <option value="2018">2018</option>
              <option value="2012">2012</option>
              <option value="2023">2023</option>
              <option value="2021">2021</option>
              <option value="2019">2019</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
