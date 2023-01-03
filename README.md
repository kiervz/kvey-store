# Kvey Store - E-commerce application - Front-end - React JS

This is the front-end of a full stack e-commerce application.

You can check [here](https://github.com/kiervz/kvey-store-api) the back-end APIs used by this front-end and hosted on AWS.

Check the demo hosted on Vercel https://kvey-store.vercel.app.

## Instructions

First clone this repository.
```bash
$ git clone https://github.com/kiervz/ecommerce-react-typescript.git
```

Change Directory into this project.
```bash
$ cd ./kvey-store
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ npm install # or yarn
```

Create a copy of .env file.
```bash
$ cp .env.example .env
```

Add the back-end URL and Stripe publishable key. Create a Stripe account here: https://stripe.com
```bash
$ REACT_APP_BE_BASE_URL=
$ REACT_APP_STRIPE_PUBLISHABLE_KEY=
```

Run it
```bash
$ npm run dev # or yarn run dev
```
