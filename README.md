# Dental Clinic Website

Welcome to the **Dental Clinic** website, a modern, responsive platform designed to showcase a dental services and connect with patients easily.  

---

## Technologies Used

- **Next.js 13** – React framework for fast and optimized web applications  
- **React** – Component-based architecture  
- **Tailwind CSS** – Utility-first CSS for rapid UI development  
- **Next/Image** – Optimized image handling for faster loading  
- **Custom Components** – Reusable buttons, containers, and navbar
- **Google API (Calendar)** – Integration for scheduling and managing appointments

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dental-clinic.git
```

2. Install dependencies:

```bash
npm install
```

2. run dependencies:

```bash
npm run dev
```

3. Run the development server:

```bash
npm run dev
```

## Environment Variables

Create a **`.env`** file in the root of your project with the following variables:
```bash
# EmailJS configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Google API configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback
GOOGLE_REFRESH_TOKEN=your_google_refresh_token

# Optional: other variables
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```



