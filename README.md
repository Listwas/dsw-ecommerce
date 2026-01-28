# DSW E-Commerce Frontend

Modern, responsive e-commerce application built with React and React Router.

## Tech Stack

- **React** 18+
- **React Router** 6+
- **CSS Modules** - Component-scoped styling
- **Modern ES6+** - Hooks, arrow functions, destructuring

## Getting Started

Go to frontend folder:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
npm install react-router-dom
```

Start on localhost:
```bash
npm run dev
```

## Project Structure

```
src/
├── pages/              # Main application pages
├── components/         # Reusable UI components
├── styles/            # CSS modules for styling
└── assets/            # Images and static files
```

## Routing Structure

```
/                       → Homepage
/product/:id            → ProductDetails
/login                  → Login
/register               → Register
/password_reset         → PasswordReset
/admin                  → AdminLogin
/user_dashboard         → UserDashboard
/admin_dashboard        → AdminDashboard
/cart                   → Cart
/delivery               → Delivery
/summary                → Summary
```

## Design System

### Colors
- Primary Green: `#16ac37`
- Text Dark: `#1f1f1f`
- Text Gray: `#717171`
- Border: `#e0e0e0`
- Background: `#f8f8f8`
- Error Red: `#dc3545`

### Typography
- Headers: 700 weight
- Body: 400-600 weight
- Font sizes: Responsive (rem units)

### Spacing
- Consistent padding/margins using rem
- Gap properties for flex/grid layouts

### Responsive Breakpoints
- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px

## API Endpoints

### Authentication
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/reset-password`
- `POST /api/auth/admin-login`

### Products
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/admin/products`
- `PUT /api/admin/products/:id`
- `DELETE /api/admin/products/:id`

### Cart
- `GET /api/cart`
- `POST /api/cart`
- `PUT /api/cart/:itemId`
- `DELETE /api/cart/:itemId`

### Orders
- `GET /api/orders/user`
- `GET /api/admin/orders`
- `POST /api/orders/delivery-info`
- `POST /api/orders/checkout`
- `PUT /api/admin/orders/:id`

### User Profile
- `GET /api/users/profile`
- `PUT /api/users/profile`

### Delivery
- `GET /api/delivery/options`
