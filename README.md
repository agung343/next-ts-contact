# Next.js Contact Form with MongoDB Intergration

This is a Next.js + typescript project that demostrate how to create a contact form page and save the submited data to a MongoDB database

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## MongoDB Integration
The contact form data submited by users is saved to MongoDB database. To configure MongoDB integration:

1. Set up MongoDB cluster and obtain your connection string.
2. Create a `.env.local` file in the project root and add your MongoDB connection string as `MONGODB_URI`.

Example `.env.local` content:

```bash
MONGODB_URI=your-mongodb-connection-string
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# next-ts-contact
