'use server'

export const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`,
      // {next: {
    //   revalidate: 3000,
    // }}
    );
  
    if (!res.ok) {
      throw new Error("Data fetching failed");
    }
  
    const data = await res.json();
    return data.results;
  };


  export const fetchTopRatedMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`,
      // {next: {
    //   revalidate: 3000,
    // }}
    );
  
    if (!res.ok) {
      throw new Error("Data fetching failed");
    }
  
    const data = await res.json();
    return data.results;
  };