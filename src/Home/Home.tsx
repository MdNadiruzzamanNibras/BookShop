
import bookbanner from "../images/background.jpg"

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="w-full">
                <img
      style={{ width: '100%', height: '700px' }}
      src={bookbanner}
      alt=""
    />
            </div>
        </div>
    );
};

export default Home;