import { MovieCardProps } from '@/types/types';
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  imageUrl,
  title,
  description,
  releaseDate,
  likes,
}) => {
  return (
    <div className="w-full max-w-sm h-80 rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-shadow duration-300 hover:shadow-xl flex flex-col">
      <div className="h-1/2">
        <Image
          alt={title}
          src={imageUrl}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card title */}
      <div className="flex-1 px-6 py-4">
        <Link href={`/movie/${id}`}>
        <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white hover:underline">
          {title}
        </div>
        </Link>
        {/* description */}
        <p className="text-base mb-4 text-gray-700 dark:text-gray-300 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {releaseDate}
          </span>
          <div className="flex items-center">
            <FaThumbsUp className="mr-1 text-blue-500 dark:text-blue-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
