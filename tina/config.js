import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.HUGO_PARAMS_TINA_CLIEN_ID, 
  token: process.env.HUGO_PARAMS_TINA_TOKEN, 

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "author",
        label: "Author",
        path: "content/en/authors",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Full Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "job",
            label: "Job",
            required: true,
          },
          {
            type: 'image',
            label: 'Ava',
            name: 'ava',
          }
        ],
      },
      {
        name: "news",
        label: "News",
        path: "content/en/news",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            ui: {
              timeFormat: "HH:mm"
            },
          },
          {
            label: 'Author',
            name: 'author',
            type: 'reference',
            collections: ['author'],
          },
          {
            type: "string",
            name: "author_review",
            label: "Author Conclusion",
          },
          {
            type: "string",
            name: "seo_title",
            label: "SEO Title",
          },
          {
            type: "string",
            name: "seo_description",
            label: "SEO Description",
          },
          {
            type: 'image',
            label: 'Image',
            name: 'img',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Tags for this post',
            list: true,
            ui: {
              component: 'tags',
            }
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "terms",
        label: "Terms",
        path: "content/en/terms",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: 'image',
            label: 'Image',
            name: 'img',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "policy",
        label: "Policy",
        path: "content/en/policy",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: 'image',
            label: 'Image',
            name: 'img',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "terms_of_use",
        label: "Terms Of Use",
        path: "content/en/terms-of-use",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: 'image',
            label: 'Image',
            name: 'img',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "aml_policy",
        label: "Aml Policy",
        path: "content/en/aml-policy",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: 'image',
            label: 'Image',
            name: 'img',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "cookie_policy",
        label: "Cookie Policy",
        path: "content/en/cookie-policy",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: 'image',
            label: 'Image',
            name: 'img',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "risk_warnings",
        label: "Risk Warnings",
        path: "content/en/risk-warnings",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: 'image',
            label: 'Image',
            name: 'img',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "about_us",
        label: "About Us",
        path: "content/en/about-us",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: 'image',
            label: 'Image',
            name: 'img',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
