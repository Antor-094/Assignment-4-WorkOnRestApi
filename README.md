# Course Review App 


Welcome to the **Course Review App**! This repository contains the source code for my course review web application. The application allows users to register, log in, and review various courses. Additionally, it includes functionality for administrators to manage courses and categories. Follow the instructions below to set up and run the application locally.

## Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Node.js package manager
- [MongoDB](https://www.mongodb.com/) - NoSQL database

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Porgramming-Hero-web-course/l2b2a4-course-review-with-auth-Antor-094.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd l2b2a4-course-review-with-auth-Antor-094
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Set Up Environment Variables:**

    Create a `.env` file in the root directory with the following content:

    ```env
    MONGODB_URI=your-mongodb-uri
    PORT=3000
    # Add any other necessary environment variables
    ```

5. **Run the Application:**

    ```bash
    npm start
    ```

    The application will be accessible at [http://localhost:3000](http://localhost:3000) by default.

6. **Open in Your Browser:**

    Visit [http://localhost:3000](http://localhost:3000) in your browser, and voilà!

### Live Preview
**[https://level2-assignment4-sable.vercel.app/](https://level2-assignment4-sable.vercel.app/)**

## Api Documentation
**[https://documenter.getpostman.com/view/31242163/2s9YkuaJtz](https://documenter.getpostman.com/view/31242163/2s9YkuaJtz)**

## Additional Commands

- **Run Tests:**

    ```bash
    npm test
    ```

    Execute automated tests to ensure the functionality is working as expected.

- **Linting: