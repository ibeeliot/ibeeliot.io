// this service class will call teh Contentful API
import { ContentfulClientApi, createClient } from 'contentful';
import { Author, HeroImage, BlogPost } from '../state/types/interfaces/types';

import moment from 'moment';

export class BlogApi {
  // creates a ContentClient instance
  client: ContentfulClientApi;

  // aync functions that need to fetch the data first and display it on the page
  async fetchBlogEntries(): Promise<Array<BlogPost>> {
    return await this.client
      .getEntries({
        content_type: 'blogPost' // only fetch blog post entry
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const blogPosts = entries.items.map(entry => this.convertPost(entry));
          return blogPosts;
        }
        return [];
      });
  }
  // aync functions that need to fetch the data first and display it on the page
  async fetchBlogById(id): Promise<BlogPost> {
    return await this.client.getEntry(id).then(entry => {
      if (entry) {
        const post = this.convertPost(entry);
        return post;
      }
      return null;
    });
  }

  constructor() {
    //   instantiating the content client with space id & access token
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    this.convertImage = this.convertImage.bind(this);
    this.convertAuthor = this.convertAuthor.bind(this);
    this.convertPost = this.convertPost.bind(this);
  }

  //   function converts image description into an image to be used with title, url, and description available from a returned object
  convertImage = (rawImage): HeroImage => {
    if (rawImage) {
      return {
        imageUrl: rawImage.file.url.replace('//', 'http://'), // may need to put null check as well
        description: rawImage.description,
        title: rawImage.title
      };
    }
  };

  convertAuthor = (rawAuthor): Author => {
    if (rawAuthor) {
      return {
        name: rawAuthor.name,
        phone: rawAuthor.phone,
        shortbio: rawAuthor.shortbio,
        title: rawAuthor.title,
        email: rawAuthor.email,
        company: rawAuthor.company,
        twitter: rawAuthor.twitter,
        facebook: rawAuthor.facebook,
        github: rawAuthor.github
      };
    }
    return null;
  };

  convertPost = (rawData): BlogPost => {
    const rawPost = rawData.fields;
    const rawHeroImage = rawPost.heroImage ? rawPost.heroImage.fields : null;
    const rawAuthor = rawPost.author ? rawPost.author.fields : null;
    return {
      id: rawData.sys.id,
      body: rawPost.body,
      description: rawPost.description,
      publishedDate: moment(rawPost.publishedDate).format('DD MM YYYY'),
      slug: rawPost.slug,
      tags: rawPost.tags,
      title: rawPost.title,
      heroImage: this.convertImage(rawHeroImage),
      author: this.convertAuthor(rawAuthor)
    };
  };
}
