import { useState } from "react";

const genres = ["Action", "Comedy", "Thriller", "Drama"];
const tabs = ["Now Showing", "Coming Soon", "Top Rated"];

const heroPosters = [
  {
    bg: "linear-gradient(160deg,#ef4444,#450a0a)",
    cls: "left-0 top-16 h-72 w-48 -rotate-[8deg]",
  },
  {
    bg: "linear-gradient(160deg,#f97316,#7f1d1d)",
    cls: "left-36 top-2 h-80 w-52",
  },
  {
    bg: "linear-gradient(160deg,#dc2626,#0a0a0a)",
    cls: "left-72 top-20 h-72 w-48 rotate-[8deg]",
  },
];

function Home() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("Now Showing");

  return (
    <main className="mx-auto max-w-6xl px-6">
      <section className="flex items-center gap-8 pb-12 pt-14">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-red-400/20 px-4 py-2 text-sm text-red-200">
            ● Now in cinemas
          </span>

          <h1 className="my-5 text-5xl font-bold leading-tight md:text-6xl">
            Your next{" "}
            <span className="bg-gradient-to-r from-red-300 via-red-400 to-orange-400 bg-clip-text text-transparent">
              movie night
            </span>{" "}
            starts here
          </h1>

          <p className="mb-7 max-w-md text-lg text-red-200">
            Discover trending movies, save your favourites and book seats in
            seconds.
          </p>

          <div className="flex max-w-xl items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2 pl-5 pr-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search movies"
              placeholder="Search movies..."
              className="flex-1 bg-transparent text-base text-white outline-none placeholder:text-red-200/70"
            />
            <button className="h-12 cursor-pointer rounded-full bg-gradient-to-r from-red-600 to-red-800 px-7 font-semibold">
              Find
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {genres.map((g) => (
              <button
                key={g}
                className="cursor-pointer rounded-full bg-white/10 px-4 py-2 text-sm text-red-200"
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Poster collage (hidden on small screens) */}
        <div className="relative hidden h-[430px] w-[500px] flex-none lg:block">
          {heroPosters.map((p, i) => (
            <div
              key={i}
              className={`absolute overflow-hidden rounded-3xl shadow-2xl shadow-black/60 ${p.cls}`}
              style={{ background: p.bg }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.78))]" />
              <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-sm font-semibold">
                ★ 8.0
              </span>
              <span className="absolute bottom-3 left-3 font-semibold">
                Movie Title
              </span>
            </div>
          ))}

          {/* Floating ticket card */}
          <div className="absolute left-8 top-[350px] flex items-center gap-3 rounded-2xl border border-white/20 bg-black/70 px-5 py-3 backdrop-blur">
            <span className="text-2xl text-red-300">🎟</span>
            <div>
              <div className="font-semibold">Movie Title</div>
              <div className="text-sm text-red-200">Today • 7:30 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trending movies ---------- */}
      <section>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-3xl font-semibold">Trending now</h2>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`h-10 cursor-pointer rounded-full border px-4 text-sm ${
                  tab === t
                    ? "border-white/50 bg-red-600/35"
                    : "border-white/20 bg-transparent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Movie cards grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* TODO: insert your MovieCard components here, for example:
              {movies.map((m) => <MovieCard key={m.id} movie={m} />)} */}
        </div>
      </section>
    </main>
  );
}

export default Home;
