'use client';

import { useState, Suspense } from 'react';
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";
import { QueryPagination } from "@/components/query-pagination";
import { Search } from "@/components/search";

const POSTS_PER_PAGE = 5;

function BlogContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  
  const filteredPosts = sortedPosts.filter((post) => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.description ?? '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const displayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="font-black text-3xl md:text-4xl lg:text-5xl">Blog</h1>
          <p className="text-sm md:text-base lg:text-xl text-muted-foreground">
            Just some place to drop our thoughts and ideas.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <Search 
            onSearch={handleSearch} 
            value={searchQuery} 
            onReset={handleReset}
          />
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description, author } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  author={author || "Sahil & Dhwani"}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
      <QueryPagination 
        totalPages={totalPages} 
        className="justify-end mt-4" 
      />
    </>
  );
}

export default function BlogPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <BlogContent />
      </Suspense>
    </div>
  );
}