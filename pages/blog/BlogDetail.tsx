import React, { JSXElementConstructor } from 'react';
import { BlogPost } from '../../state/types/interfaces/types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Image = styled.img`
  width: 80%;
  height: 300px;
  object-fit: cover;
`;

type BlogDetailProps = {
  post: BlogPost;
};

export const BlogDetail = (props: BlogDetailProps) => {
  const { post } = props;
  // if post tags exist
  const mainTag = post.tags.length > 0 ? post.tags[0] : '';

  return (
    <section className="post-full post">
      <header className="post-full-header">
        <h1 className="post-full-title">{post.title}</h1>
        <div className="text-center meta">{`${post.publishedDate} / ${mainTag}`}</div>
      </header>
      <figure className="post-full-image text-center">
        <Image src={post.heroImage.imageUrl} alt={post.heroImage.title} />
      </figure>
      <section
        style={{ overflowY: 'inherit', marginBottom: '2em' }}
        className="post-full-content"
      >
        <ReactMarkdown source={post.body} />
      </section>
    </section>
  );
};
