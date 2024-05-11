# Node Express Starter Template With JWT MVC Architecture

This is a starter template for building Node.js applications using Express.js with JWT authentication and following the MVC (Model-View-Controller) architecture.

## Features

- Authentication with JSON Web Tokens (JWT)
- MVC (Model-View-Controller) architecture
- Express.js for routing and middleware
- MongoDB integration with Mongoose ORM
- File upload with Multer
- Rate limiting with express-rate-limit
- CORS support with cors
- Helmet for securing HTTP headers
- Validation and sanitization with express-validator and xss-clean
- Error handling with express-async-errors
- Nodemailer for sending emails
## CRUD Operations

### Create

-   To create a new resource, send a POST request to the appropriate endpoint with the required data.

### Read

-   To retrieve existing resources, send a GET request to the appropriate endpoint.

### Update

-   To update an existing resource, send a PUT or PATCH request to the appropriate endpoint with the updated data.

### Delete

-   To delete an existing resource, send a DELETE request to the appropriate endpoint.

## Getting Started

 - Clone the repository:

   ```bash
   git clone https://github.com/MuhammadAliashraf/Node-Express-Starter-Templet-With-JWT-MVC-Architecture.git
   ```

 - Install dependencies:

   ```bash
   cd Node-Express-Starter-Templet-With-JWT-MVC-Architecture
   npm install
   ```

 - Set up environment variables:

   Create a `.env` file in the root directory and add your environment variables. Refer to the `.env.example` file for required variables.
  

 - DB_URL=

 - PORT=

 - JWT_SECRET=

 - TOKEN_LIFETIME=

 - Start the development server:

   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev`: Starts the server in development mode using nodemon for live reloading.
- `npm test`: Runs tests (if available).
- 
## How to Contribute

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -am 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Create a new Pull Request.

## Dependencies

- bcrypt: ^5.1.1
- bcryptjs: ^2.4.3
- body-parser: ^1.20.2
- cloudinary: ^1.41.0
- cors: ^2.8.5
- dotenv: ^16.3.1
- ejs: ^3.1.9
- express: ^4.18.2
- express-async-errors: ^3.1.1
- express-fileupload: ^1.4.3
- express-rate-limit: ^7.2.0
- firebase: ^10.7.1
- helmet: ^7.1.0
- http-status-codes: ^2.3.0
- jsonwebtoken: ^9.0.2
- mongoose: ^8.0.3
- multer: ^1.4.5-lts.1
- nodemailer: ^6.9.7
- nodemon: ^3.0.2
- rate-limiter: ^0.2.0
- stripe: ^14.17.0
- swagger-ui-express: ^5.0.0
- xss-clean: ^0.1.4

## License

This project is licensed under the ISC License
