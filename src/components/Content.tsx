"use client"

import React, { useEffect } from 'react';
import { fetchArticleById } from '../features/articles/articlesSlice';
import { fetchAuthors } from '../features/authors/authorsSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

interface ContentProps {
  articleId: string; // Define articleId prop
}

const Content: React.FC<ContentProps> = ({ articleId }) => {
  const dispatch = useAppDispatch();
  const { article, loading: articleLoading, error: articleError } = useAppSelector((state) => state.articles);
  const { authors, loading: authorsLoading, error: authorsError } = useAppSelector((state) => state.authors);

  useEffect(() => {
    // Convert articleId to a number
    const parsedArticleId = parseInt(articleId, 10); // Assuming articleId is initially a string
    dispatch(fetchArticleById(parsedArticleId)); // Fetch article by parsedArticleId
    dispatch(fetchAuthors());
  }, [dispatch]);

  if (articleLoading || authorsLoading) {
    return <p>Loading...</p>;
  }

  if (articleError) {
    return <p>Error loading article: {articleError}</p>;
  }

  if (authorsError) {
    return <p>Error loading authors: {authorsError}</p>;
  }

  if (!article || authors.length === 0) {
    return <p>Data not found</p>;
  }

  const author = authors.find(author => author.id === article.author_id);
  if (!author) {
    return <p>Author not found</p>;
  }

  return (
    <section>
      <div>
        <p className='text-toyota-red'>{author.name}</p>
      </div>
      <div>
        <h1 className='font-bold text-gray-800 text-[2rem] leading-9'>
          {article.title}
        </h1>
        <p className='py-5'>
          {article.body}
        </p>
      </div>
      <p>
        <a href="#" className='underline font-bold'>
          Read Article
        </a>
      </p>
    </section>
  );
};

export default Content;
