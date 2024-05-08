import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero.png";
function Home() {
  return (
    <div className="lg:flex items-center justify-between pt-9 bg-gradient-to-r from-orange-100 from-10% to-white to-10% ">
      <div className="lg:px-12 px-4 py-12 lg:w-1/2">
        <h1 className="text-[#393280] font-semibold text-[60px]">
          BOOKLAB
        </h1>
        <p className="leading-7" style={{ color: "rgba(57, 50, 128, 0.80)" }}>
        Welcome to BookLab, your one-stop solution for exploring, organizing, and discovering books.
        In a world inundated with information, BookLab is designed to streamline the process of  
        finding your next great read while enhancing your overall reading experience.

        </p>
        <Link to="books">
        <button
          type="button"
          className="border my-4 border-blue-800 shadow-lg rounded-md px-4 py-2 text-sm bg-white text-[#393280]"
        >
          Explore Now{" "}
          <span>
            <i
              className="fa-solid fa-arrow-right fa-beat px-1"
              style={{ color: "#393280" }}
            ></i>
          </span>
        </button>
        </Link>
      </div>
      <div className="relative flex justify-end">
        <img
          className="lg:w-[713px] lg:h-[607px] ps-4 flex-shrink-0"
          src={HeroImg}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export default Home;
