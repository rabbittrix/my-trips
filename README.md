This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
yarn test:watch
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Zero Config PWA Plugin for Next.js

```bash
yarn add next-pwa (to install)

yarn build

yarn start
```

## Welcome to my trips, do you like to travel, came together with us?

I'm going to use Leaflet in this work, which is an open-souece library, different from GoogleMaps.
React-Leaflet is a wrapper for Leaflet, which is a JavaScript library for interactive maps.

## Create a CMS

* https://app.graphcms.com/

* Free CMS for React.js, works is good.

## NextJS commands that are most used

* getStaticPaths => is used to generate the urls in build time /about, /trip/lisbon

* getStaticProps => is used to fetch data from the page (props) - build time - static

* getServerSideProps => serves to fetch data from the page (props) - runtime - every request     (bundle stays on the server)

* getInitialProps => it is used to fetch data from the page (props) - runtime - every request (bundle also comes to the client) - hydrate (it is almost in disuse)
