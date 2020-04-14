import React from 'react';
import { Layout } from '../../components/layout/layout';
import { BlogPost } from '../../state/types/interfaces/types';
import { BlogApi } from '../../services/blog';

type BlogPageProps = {
  entries: Array<BlogPost>;
};

export default class BlogPage extends React.Component<BlogPageProps> {
  static async getInitialProps() {
    const api = new BlogApi();
    const entries = await api.fetchBlogEntries();
    return { entries };
  }

  renderBlogList = entries => {
    entries.map((entry, i) => {
      return (
        <BlogBox
          key={i}
          id={entry.id}
          slug={entry.slug}
          imageUrl={entry.heroImage.imageUrl}
          title={entry.title}
          author={entry.author.name}
          description={entry.description}
          tags={entry.tags}
        ></BlogPost>
      );
    });
  };

  render() {
    const { entries } = this.props;
    return (
      <Layout>
        <h1>Blog</h1>
        <div className="row mt-3">
          {entries.length > 0 && this.renderBlogList(entries)}
        </div>
      </Layout>
    );
  }
}
