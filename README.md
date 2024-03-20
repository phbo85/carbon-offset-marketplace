This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Considerations

The project is using Next.js and Typescript as per the requirements.

The project is using the following libraries:

- Chakra UI for UI components including a custom theme
- zod for parsing the mock data, could also be useful for parsing the API response
- zustand for state management, managing the cart state should probably be server side in a real-world scenario but for the purpose of this project, it's client side
- jest/rtl for testing
