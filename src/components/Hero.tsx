"use client"

import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { CornerUpRight, TriangleRight } from 'lucide-react';
import { fetchArticleById } from '../features/articles/articlesSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

interface HeroProps {
  articleId: string; // Define articleId prop
}

const Hero: React.FC<HeroProps> = ({ articleId }) => {
  const dispatch = useAppDispatch();
  const { article, loading, error } = useAppSelector((state) => state.articles);

  useEffect(() => {
    // Convert articleId to a number
    const parsedArticleId = parseInt(articleId, 10); // Assuming articleId is initially a string
    dispatch(fetchArticleById(parsedArticleId));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading article: {error}</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  const date = new Date(article.created_at);
  const formattedDate = date.toLocaleString('default', { month: 'short' }).toUpperCase();

  return (
    <section className='min-h-[400px]'>
      <div className='h-[500px] flex justify-center'>
        <img 
          src={`./${article.image_url}`} 
          className='w-full object-cover'
          alt={article.title} 
        />
      </div>

      <div className='absolute z-10 h-[80px] w-[80px] top-[48%] ml-8'>
        <div className='skew-x-[-12] bg-toyota-red w-full h-full'>
          <TriangleRight className='absolute bottom-1 right-1 text-white fill-white' size={15} />
        </div>

        <div className='absolute top-0 w-full h-full pt-2 text-white'>
          <div className='flex justify-center items-center w-full h-full'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-[1.8rem] text-center leading-3 font-semibold'>{date.getDate()}</h1>
              <p className='text-center text-[0.8rem]'>{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex justify-end items-center h-[80px] pr-8'>
        <Button variant="ghost" className='font-bold'>
          <CornerUpRight /> &nbsp; SHARE
        </Button>
      </div>
    </section>
  );
};

export default Hero;