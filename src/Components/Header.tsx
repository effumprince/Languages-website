import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <div className="flex justify-center gap-100 py-5 items-center text-white">
        <div>
        <h1 className="font-bold  text-xl">NOATRANS</h1>
        </div>
         
        <div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link to="/Home" className="hover:text-blue-600">Home</Link>
                </li>
                <li>
                  <Link to="/AboutPage" className="">About</Link>
                </li>

                <li>
                  <Link to="/CoursesPage">Courses</Link>
                </li>

                <li>
                  <Link to="/CoursesPage">Contact</Link>
                </li>

                </ul>
          </nav>

        </div>

        

        

<div>
  <button className="rounded-xl bg-[#ff4500] px-5 py-2 ">Sign Up</button>
</div>








      </div>
    </header>
  );
}
export default Header;