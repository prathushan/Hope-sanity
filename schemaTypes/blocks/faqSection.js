export default {
  name: 'faqSection',
  type: 'object',
  title: 'FAQ Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
      description: 'Optional title shown above FAQs (e.g. "Frequently Asked Questions")'
    },
    {
      name: 'faqs',
      type: 'array',
      title: 'FAQs',
      of: [
        {
          type: 'object',
          title: 'FAQ',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question'
            },
            {
              name: 'answer',
              type: 'array',
              title: 'Answer',
              of: [
                { type: 'block' }
              ]
            }
          ],
          preview: {
            select: {
              title: 'question'
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || 'FAQ Section'
      };
    }
  }
};
