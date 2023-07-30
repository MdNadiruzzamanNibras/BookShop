
import bookbanner from "../images/background.jpg"
import Books from "./Books";

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="w-full">
                <img
      style={{ width: '100%', height: '500px' }}
      src={bookbanner}
      alt=""
    />
            </div>

            <Books/>
        </div>
    );
};

export default Home;