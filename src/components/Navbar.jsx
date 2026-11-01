import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");



  const navigate = useNavigate();


  const navLinks = [{ name: "Movies", path: "/movies" },
  { name: "Stream", path: "/stream" },
  { name: "Events", path: "/events" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "My Bookings", path: "/my-bookings" },
  ];




  const closeMenu = () => setMenuOpen(false);


  //SEARCH FUNCTION

  const handleSearch = (e) => {
    e.preventDefault();



    const query = searchTerm.trim();

    if (!query) return;

    navigate(`/movies?search=${encodeURIComponent(query)}`);
    setSearchTerm("");
    closeMenu();
  };



  //NAVIGATION STYLING

  const navLinkClass = ({ isActive }) =>
    `relative whitespace-nowrap text-[17px] font-bold tracking-wide transition-all duration-300 
  ${isActive ? "text-[#F84464] after:absolute after:-bottom-3 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#F84464]"
      : "text-gray-300 hover:text-[#FF6B91]"}`;





  return (
    <header className="sticky top-0 z-50 w-full border-b
      border-white/10 bg-[#100D16]/95 shadow-xl shadow-black/20
      backdrop-blur-xl">

      {/* TOP HEADER */}


      <div className="border-b border-white/10">

        <div className="mx-auto flex w-full items-center gap-[19px] px-7 py-4">

          {/* LEFT SPACING + LOGO */}


          <Link to="/" onClick={closeMenu}
            className="ml-0 flex shrink-0 items-center gap-3 2xl:ml-[261px]">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center
            rounded-2xl bg-gradient-to-br from-[#F84464] to-[#E92D76]
            text-3xl shadow-lg shadow-pink-500/30 transition duration-300
            hover:scale-110">

              🎬

            </div>

            <div className="leading-tight">
              <h1 className="whitespace-nowrap text-[29px] 
              font-black tracking-tight text-white">
                SHOW<span className="text-[#F84464]">DEKHO</span>

              </h1>



              <p className="mt-1 whitespace-nowrap text-[9px]
              font-bold tracking-[3px] text-gray-400">
                YOUR MOVIE DESTINATION

              </p>

            </div>
          </Link>

          {/* SEARCH BAR */}


          <form onSubmit={handleSearch}
            className="hidden h-[50px] w-full max-w-[660px]
          min-w-0 flex-1 items-center gap-3
          rounded-lg border border-white/15 bg-white/[0.05]
          px-5 transition-all duration-300 focus-within:border-[#F84464]
          focus-within:bg-white/[0.08] lg:flex">

            <button
              type="submit"
              aria-label="Search movies"
              className="shrink-0 text-gray-300 transition hover:text-[#F84464]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round">

                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />

              </svg>

            </button>


            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for Movies, Events, Plays and more..."
              className="w-full min-w-0 bg-transparent text-[16px]
            font-semibold text-white outline-none placeholder:text-gray-400"/>

          </form>



          {/* SIGN IN & SIGN UP */}

          <div className="ml-auto hidden shrink-0 items-center gap-5 lg:flex">


            <Link to="/login"
              className="rounded-xl px-5 py-3 text-[17px] font-bold text-white 
            transition hover:bg-white/10 hover:text-[#FF6B91]">

              Sign In
            </Link>


            <Link
              to="/signup"
              className="rounded-xl bg-gradient-to-r from-[#F84464] to-[#E92D76]
             px-8 py-3.5 text-[17px] font-extrabold text-white shadow-lg shadow-pink-500/25
              transition duration-300 hover:-translate-y-1 hover:shadow-pink-500/50">

              Sign Up
            </Link>

          </div>



          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="ml-auto flex h-12 w-12 shrink-0 items-center 
          justify-center rounded-xl border border-white/15 text-2xl font-bold 
          text-white transition hover:border-[#F84464] hover:text-[#F84464] lg:hidden">
            {menuOpen ? "✕" : "☰"}

          </button>

        </div>

      </div>



      {/* SECOND NAVIGATION ROW  */}


      <div className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-[1700px] items-center 
      justify-center gap-10 px-10 py-4">


          <NavLink to="/" end className={navLinkClass}>
            Home

          </NavLink>

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={navLinkClass}>
              {link.name}

            </NavLink>
          ))}

        </div>

      </div>


      {/* MOBILE MENU */}


      {menuOpen && (
        <div className="border-t border-white/10 bg-[#100D16] px-5 py-6
        shadow-2xl lg:hidden">


          {/* MOBILE SEARCH */}


          <form
            onSubmit={handleSearch}
            className="mb-6 flex h-12 items-center gap-3 rounded-lg border border-white/15
          bg-white/[0.05] px-4 focus-within:border-[#F84464]">

            <button
              type="submit"
              aria-label="Search movies">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round">

                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />

              </svg>

            </button>

            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search movies, events and more..."
              className="w-full bg-transparent text-sm font-semibold text-white outline-none
            placeholder:text-gray-400"/>

          </form>


          {/* MOBILE NAVIGATION */}
          <div className="grid grid-cols-2 gap-4">
            <NavLink to="/" end onClick={closeMenu}
              className={navLinkClass} >
              Home
            </NavLink>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={navLinkClass}>
                {link.name}

              </NavLink>

            ))}

          </div>

          {/* MOBILE AUTH BUTTONS */}

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">

            <Link to="/login"
              onClick={closeMenu}
              className="rounded-xl border border-white/20 py-3.5 text-center text-[15px] font-bold text-white transition hover:border-[#F84464] hover:text-[#FF6B91]">
              Sign In
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="rounded-xl bg-gradient-to-r from-[#F84464] to-[#E92D76] py-3.5 text-center text-[15px] font-extrabold text-white shadow-lg shadow-pink-500/20">
              Sign Up
            </Link>

          </div>


        </div>
      )}

    </header>
  );
}
export default Navbar;