# 🚤 SK Marine - Professional Marine Services

Welcome to the official website of **SK Marine**! Specialising in delivering top-notch marine services, SK Marine offers a wide range of services from outboard engine maintenance to comprehensive marine repairs. This website provides a glimpse into the work and expertise that SK Marine brings to the marine industry. It also features an admin interface that allows for easy image uploads and gallery management.

[**🌐 Live Demo**](https://skmarine.co.nz) — Explore SK Marine once!

![Project Screenshot](https://res.cloudinary.com/dzdr7yyz4/image/upload/v1728471325/skmarine_lbm4zf.png)

## 🛠️ Tech Stack

The website is built using modern web technologies to ensure high performance, responsiveness, and maintainability:

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS for responsive and modern design
- **Backend:** Firebase for authentication, image storage, and admin functionality
- **Version Control:** Git and GitHub for efficient source code management

## 📦 Installation

To set up and run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/jamie-da-dev/skmarine.git

# Navigate into the project directory
cd skmarine

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🎨 Design Philosophy

SK Marine's website is all about showcasing professionalism in a user-friendly way. With a clean and modern design, it makes navigating through services easy and enjoyable. The responsive layout ensures that the site looks great on any device, whether you're on a desktop or your phone.

Embracing a minimalist style, the website uses plenty of white space and a cohesive color palette to guide visitors effortlessly through each section. Interactive elements, like smooth transitions and hover effects, add a touch of flair, making the browsing experience dynamic and engaging.

In short, the design aims to create a welcoming space where visitors can easily explore the top-notch marine services SK Marine has to offer, all while enjoying a seamless and enjoyable journey through the site.

## 🚀 Features

### 🌊 Dynamic Services Showcase

Explore the wide range of marine services provided by SK Marine. Each service includes detailed descriptions and visuals, making it easy for visitors to explore and understand the expertise available, from engine repairs to electrical system services.

### 📸 Image Gallery

A comprehensive image gallery highlights previous work completed by SK Marine, demonstrating the quality of services provided. Regular updates ensure that the gallery remains fresh, allowing potential clients to see the quality of services offered and inspiring confidence in the company’s capabilities.

### 📖 About Page

This section shares the founder’s journey in the marine industry, detailing their experience and dedication to quality service. This personal narrative builds a connection with visitors, making the brand relatable and trustworthy.

### 📞 Contact

Visitors can easily get in touch through a contact form designed to facilitate smooth communication for service inquiries.

### 👨‍💼 Admin Dashboard

The website includes an admin dashboard for authorised users (admin login required). From the dashboard, the admin can:

- Upload images of recent work directly to the gallery
- Remove outdated or irrelevant images
- Maintain an up-to-date showcase of work for visitors

### 🔒 Secure Authentication

The admin dashboard is protected by Firebase Authentication, ensuring that only authorised personnel can access sensitive areas. This adds a layer of security and trust to the website, reassuring visitors about its management.

## 📂 Project Structure

The project follows a well-organised structure to promote scalability and maintainability:

```plaintext
.
├── emails/               # Email templates and logic
│   ├── AdminNotification.tsx  # Admin notification email template
│   ├── Emails.ts              # Email styling configuration
│   └── UserConfirmation.tsx   # User confirmation email template
│
├── public/               # Public assets
│   └── logo.svg          # Logo image
│
├── src/
│   ├── app/              # Next.js App directory (for new routing)
│   │   ├── admin/        # Admin dashboard-related component
│   │   ├── api/          # API route handlers
│   │   │   └── contact/  # Contact API
│   │   │       └── route.ts  # Handles email sending via Resend
│   │   ├── components/   # React components
│   │   │   ├── About.tsx     # About section component
│   │   │   ├── Contact.tsx   # Contact form component
│   │   │   ├── Footer.tsx    # Footer component
│   │   │   ├── Gallery.tsx   # Gallery component
│   │   │   ├── Intro.tsx     # Introductory section component
│   │   │   ├── Navbar.tsx    # Navigation bar component
│   │   │   └── Service.tsx   # Service details and display component
│   │   ├── firebase/     # Firebase-related configuration
│   │   ├── login/        # Login-related component
│   │   ├── styles/       # Global and layout-specific stylesheet
│   │   │   └── globals.css   # Global CSS styles
│   │   ├── layout.tsx    # Layout component
│   │   └── page.tsx      # Main landing page
│
├── tailwind.config.ts    # Tailwind CSS configuration
└── ...
```

## 📝 Commit History

The commit history is detailed and descriptive, documenting every change, feature addition, and bug fix. This transparency ensures easy tracking of project progress and development decisions.

## 🥑 Improvements and Enhancements

- **Admin Functionality:** The website includes a dedicated admin page for managing content, making it easy to keep the gallery updated with minimal effort.
- **Responsive Design:** Tailwind CSS ensures the website remains fully responsive across different devices and screen sizes.
- **Seamless User Experience:** The site is designed with ease of use in mind, ensuring that visitors can quickly access all the information they need, from services to contact details.

## 🦾 Future Improvements

- **Enhanced Admin Features:** Future plans include adding the ability to manage service descriptions and text content from the admin dashboard, allowing for full website management without touching the codebase.
- **Analytics Integration:** Plans to integrate Google Analytics to track user engagement and improve site performance based on visitor behavior.

## 🚀 Get in Touch

I’m always open to new opportunities and collaborations! Feel free to reach out to me via:

- **LinkedIn:** [Jamie Shin](https://www.linkedin.com/in/jamie-da-dev/)
- **GitHub:** [jamie-da-dev](https://github.com/jamie-da-dev)
- **Email:** [jamietls0801@gmail.com](mailto:jamietls0801@gmail.com)
