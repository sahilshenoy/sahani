# Tech with Sahil & Dhwani

This project is a blog and newsletter platform where we document our technology projects, share insights, and provide helpful resources. The website is built using **Next.js 14**, **Shadcn**, **Velite**, and integrated with **AWS SES** for sending emails.

## Features

### Implemented Features
- **MDX-based blogs**: Each blog is created using MDX, allowing for rich content and dynamic components.
- **Search Functionality**: Easily search through blog posts with the integrated search feature, ensuring quick access to specific content.

### Upcoming Features
- **Subscription Functionality**: Readers will be able to subscribe to receive updates and newsletters.
  - **Send Emails using AWS SES**: Automatically send newsletters to subscribers using AWS Simple Email Service (SES).
  
- **Tag System**: Blogs are categorized into different sections like:
  - DSA (Data Structures and Algorithms)
  - HLD (High-Level Design)
  - LLD (Low-Level Design)
  - Interview Prep
  - Documentation

## Tech Stack
- **Next.js 14**: Modern React framework with server-side rendering and static site generation.
- **Shadcn**: Styled components for building user interfaces.
- **Velite**: A utility-based CSS framework to improve design consistency.
- **AWS SES**: For email subscription and newsletter distribution.

## Getting Started

### Prerequisites
- Node.js
- AWS SES account (for email sending features)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sahilshenoy/techwithsd.git
   cd techwithsd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the website.

### Configuration
To configure AWS SES for sending emails, follow the AWS SES Documentation to set up your environment and credentials.

### Contributing
Contributions are welcome! Feel free to submit a pull request or create an issue to discuss new ideas and features.

### License
This project is licensed under the `MIT License`.
