# Making an E-Commerce Back End

## The Task

**E-Commerce**, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

The task is to build the back end for an e-commerce site by modifying starter code. I've configured a working Express.js API to use Sequelize to interact with a PostgreSQL database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

The following video shows:

Category:

- the application's GET routes to return all categories
- the application's GET routes to return a single category
- the application's POST routes to create a category
- the application's PUT routes to update a category
- the application's DELETE routes to delete a category

Product:

- the application's GET routes to return all products
- the application's GET routes to return a single product
- the application's POST routes to create a product
- the application's PUT routes to update a product
- the application's DELETE routes to delete a product

Tags:

- the application's GET routes to return all tags
- the application's GET routes to return a single tag
- the application's POST routes to create a tag
- the application's PUT routes to update a tag
- the application's DELETE routes to delete a tag

[youtube video link](https://youtu.be/wiL0g0lkCrQ)

## Packages Used

This app uses the [pg](https://node-postgres.com/) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect the Express.js API to a PostgreSQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.
