# Angular Repository

This repository contains an Angular project with various features and dependencies. It utilizes the [PrimeNG](https://primeng.org/), [PrimeFlex](https://www.primefaces.org/primeflex/padding), PrimeNG [Sakai](https://www.primefaces.org/sakai-ng/#/) theme and incorporates images from [Undraw.co](https://undraw.co). The following sections provide an overview of the project's dependencies and features.

## Dependencies

The project relies on the following dependencies:

### Production Dependencies

-   **angular**: Version 16
-   **chart.js**: Version 4.3.0
-   **primeflex**: Version 3.3.0
-   **primeicons**: Version 6.0.1
-   **primeng**: Version 16.0.0-rc.1
-   **quill**: Version 1.3.7

### Development Dependencies

-   **angular-eslint/schematics**: Version 16.0.2
-   **eslint**: Version 8.40.0
-   **eslint-plugin-prettier**: Version 4.2.1

## Features

The Angular project includes the following features:

-   Main module. Which should be redirected if the user is logged in.

-   Not Found Module page (404)

-   Authentication Module Pages:

    -   Sign In
    -   Sign Up
    -   Recover Password
    -   Forgot Password
    -   Validate OTP

-   General stuff
    -   Use of PathLocationStrategy instead of HashLocationStrategy
    -   Custom form validator for controls that must match like password and confirmPassword
    -   Auth Guard (CanActivate) using functional guards
    -   Particular way to define routes using a external file (\*-routes-names.ts)

The user interface incorporates the [PrimeNG](https://www.primefaces.org/sakai-ng/#/) theme, providing a visually appealing and consistent design. Additionally, the project includes relevant images obtained from [Undraw.co](https://undraw.co) to enhance the overall appearance.

Please refer to the project's documentation and source code for further details on implementation and usage.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Build and run the project using `ng serve -o`. That will automatically open a new browser window.

## Development Workflow

To contribute to this project or further customize it, follow these guidelines:

1. Create a new branch for your features or bug fixes: `git checkout -b feature/your-feature-name`.
2. Make the necessary changes and additions to the codebase.
3. Format the code to adhere to the project's linting rules: `npm run lint`.
4. Commit your changes: `git commit -m "Add your commit message here"`.
5. Push the changes to the remote repository: `git push origin feature/your-feature-name`.
6. Open a pull request in the repository and provide a descriptive explanation of your changes.

## Additional Information

For additional information and support, refer to the following resources:

-   Angular Documentation: https://angular.io/docs
-   PrimeNG Documentation: https://www.primefaces.org/primeng/showcase
-   Undraw: https://undraw.co

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

Special thanks to the creators and contributors of the [PrimeNG Sakai](https://www.primefaces.org/sakai-ng/#/) theme and [Undraw.co](https://undraw.co) for their valuable resources and designs.

## Contributors

-   **Rafael de Castro**

If you have contributed to this project, feel free to add your name and link to your GitHub profile above.

We appreciate your interest and contributions to this project!
