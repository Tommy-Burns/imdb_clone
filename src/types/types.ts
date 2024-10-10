
import { IconType } from 'react-icons';

export type MenuItem = {
  name: string;
  link: string;
  icon: IconType;
};

export type MovieCardProps = {
  id: string;
    imageUrl: string;
    title: string;
    description: string;
    releaseDate: string;
    likes: number;
  }


  export type Movie = {
    id: string;
    title: string;
  name?: string;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  original_title: string;
  original_name: string;
  release_date: string;
  first_air_date: string;
  vote_count: number;
  }