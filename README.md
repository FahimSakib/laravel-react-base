## Laravel React Base

The Laravel React Base project is a robust web application boilerplate that combines the power of Laravel on the backend with the versatility of React on the frontend. Designed to serve as a starting point for any Laravel project, it allows developers to bypass the creation of essential web application features, saving valuable time and effort. Utilizing Inertia JS for a smooth single-page application experience and Tailwind CSS for custom styling, this project showcases a fully responsive design, ensuring optimal performance across mobile and desktop devices.

#### Key Features
- **Responsive Design**: Fully optimized for both mobile and desktop viewing, providing a seamless user experience regardless of device.
- **Dark Mode**: A built-in dark mode option to enhance user comfort during low-light usage.
- **Dynamic Tables**: Highly responsive tables and related tools that adapt smoothly to various screen sizes.
- **User Management**: Comprehensive user management system.
- **Roles and Permissions**: Flexible and secure roles and permissions system to manage access control.
- **Web Application Essentials**: Includes fundamental web application components such as:
  - Interactive Dashboard
  - Navigation Bars
  - User Dropdown Menu
  - And more

#### Technologies Used
- **Laravel**
- **React**
- **Inertia JS**
- **Tailwind CSS**

This project emphasizes a cohesive and efficient user interface, supported by custom-made designs that enhance both functionality and aesthetics without relying on external libraries.

### Installing
*Clone project from GitHub*

`git clone https://github.com/FahimSakib/laravel-react-base.git`

*Navigate to the directory and install composer*

`composer install`

*Install pnpm*

`pnpm install`

*Copy .env.example and make .env file*

`cp .env.example .env`

*Generate app key*

`php artisan key:generate`

*Run migrations and seeding*

`php artisan migrate --seed`

*Run project*

`php artisan serve` and `pnpm dev`

*Note: Even if you register a user, you will be unable to utilise the application unless you seed the database. After seeding, you can login with the email "admin@mail.com" and password "password"; this default user is set to super admin.*
