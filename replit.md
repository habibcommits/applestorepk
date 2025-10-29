# Apple.store.pk E-Commerce Platform

## Overview
A serverless e-commerce web application for Apple.store.pk - a premium Apple products retailer in Islamabad, Pakistan. Built with React, Express, and in-memory storage for Vercel deployment compatibility.

## Business Information
- **Name**: Apple.store.pk
- **Location**: Shop no. 2,3, Karsaaz Tower II, E 11/2 Islamabad, 44000
- **Phone**: 0302 5018696
- **Rating**: 4.4★ (216 Google reviews)
- **Hours**: Opens daily at 1:30 PM

## Features Implemented

### Customer-Facing Features
1. **Landing Page**
   - Hero section with business showcase
   - Key features and benefits
   - Customer reviews from Google
   - Contact information and Google Maps integration

2. **Product Shop**
   - Grid display of all Apple products
   - Product cards with images, descriptions, and pricing
   - Add to cart functionality
   - Stock availability indicators

3. **Shopping Cart**
   - Slide-in drawer from right side
   - Quantity adjustment
   - Item removal
   - Real-time total calculation
   - Persistent cart (localStorage)

4. **Guest Checkout**
   - No sign-up/login required
   - Customer information form (name, phone, email, address, city)
   - Multiple payment options:
     - Cash on Delivery (COD)
     - Bank Transfer
     - Online Payment
   - Order summary with itemized list

5. **Theme Toggle**
   - Dark/Light mode support
   - Persistent theme preference
   - Smooth transitions

### Admin Features
1. **Admin Dashboard** (/admin)
   - Login protection (credentials in admin-credentials.txt)
   - Product management tab
   - Order management tab

2. **Product Management**
   - Add new products with:
     - Name, description, price
     - Image URL, category, stock
   - Edit existing products
   - Delete products
   - View all products in table format

3. **Order Management**
   - View all customer orders
   - Order details (customer info, items, total, payment method)
   - Update order status:
     - Pending
     - Processing
     - Completed
     - Cancelled
   - Order timeline with creation date

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   │   ├── product-management.tsx
│   │   │   │   └── order-management.tsx
│   │   │   ├── ui/          (Shadcn components)
│   │   │   ├── header.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── product-card.tsx
│   │   │   ├── cart-drawer.tsx
│   │   │   ├── footer.tsx
│   │   │   └── theme-provider.tsx
│   │   ├── pages/
│   │   │   ├── home.tsx
│   │   │   ├── shop.tsx
│   │   │   ├── checkout.tsx
│   │   │   ├── admin.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx          (Routing & cart state)
│   │   └── index.css        (Theme colors)
│   └── index.html
├── server/
│   ├── routes.ts            (API endpoints)
│   └── storage.ts           (In-memory storage)
├── shared/
│   └── schema.ts            (Data models & types)
├── attached_assets/
│   └── generated_images/    (Product images)
├── design_guidelines.md     (Apple-inspired design system)
└── admin-credentials.txt    (Admin login info)
```

## Data Models

### Product
```typescript
{
  id: string;
  name: string;
  description: string;
  price: decimal;
  image: string;
  category: string;
  stock: number;
}
```

### Order
```typescript
{
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  address: string;
  city: string;
  paymentMethod: string;
  total: decimal;
  status: string;
  items: string; // JSON array
  createdAt: timestamp;
}
```

### Cart Item
```typescript
{
  product: Product;
  quantity: number;
}
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status

## Technology Stack

### Frontend
- React 18
- Wouter (routing)
- TanStack Query (data fetching)
- Tailwind CSS (styling)
- Shadcn UI (component library)
- Lucide React (icons)

### Backend
- Express.js
- In-memory storage (MemStorage)
- CORS enabled
- Serverless-compatible

### Design
- Apple-inspired minimalist aesthetic
- Inter font family
- Dark/Light theme support
- Responsive design (mobile-first)
- Smooth animations and transitions

## Admin Credentials
See `admin-credentials.txt` for default login credentials.

## Recent Changes
- 2024-10-29: Initial implementation with all MVP features
  - Complete e-commerce frontend with Apple-inspired design
  - Product catalog with 6 generated product images
  - Shopping cart with persistent state
  - Guest checkout with multiple payment options
  - Admin dashboard for product and order management
  - Dark/light theme toggle
  - Fully responsive design

## User Preferences
- Design: Apple-inspired minimalist aesthetic with generous whitespace
- Theme: Support for both dark and light modes
- Deployment: Serverless architecture for Vercel compatibility
- Storage: In-memory (to stay within Replit Starter plan)

## Project Architecture
- Schema-first development with TypeScript
- Component-based React architecture
- Serverless API routes
- Client-side cart persistence (localStorage)
- Responsive design with mobile-first approach
- Accessibility-focused (proper ARIA labels, keyboard navigation)
