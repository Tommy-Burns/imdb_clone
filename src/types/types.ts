export type MovieCardProps = {
  id: string;
    imageUrl: string;
    title: string;
    description: string;
    releaseDate: string;
    likes: number;
  }


  export type Movie = {
    title: string;
  name?: string;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  release_date: string;
  first_air_date?: string;
  vote_count: number;
  }