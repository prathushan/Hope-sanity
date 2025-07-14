import { FaBlog } from 'react-icons/fa';

export default {
  name: 'post',
  title: 'Blogs',
  type: 'document',
  icon: FaBlog,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'excerpt',
      type: 'array',
      title: 'Excerpt',
      of: [{ type: 'block' }],
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'file',
          title: 'Video File',
          options: {
            accept: 'video/*'
          }
        },
        {
          type: 'url',
          name: 'videoUrl',
          title: 'Embed Video URL',
          description: 'Paste a YouTube/Vimeo link to embed',
        }
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string' },
        { name: 'metaDescription', type: 'text' },
        { name: 'ogImage', type: 'image' },
        {
          name: 'canonicalUrl',
          type: 'url',
          description: 'Canonical URL for this page'
        }
      ]
    }
  ],
};
