
import { fetchMovies } from "@/actions";
import MoviesSection from "@/components/HOMEPAGE/movies-section";

const Homepage = async () => {
  const results = await fetchMovies();
  // console.log(results);

  return (
    <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <MoviesSection movies={results} />
      </main>
    </div>
  );
}

export default Homepage;
