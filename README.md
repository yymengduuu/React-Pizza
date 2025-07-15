# 🍕 FirePie Express Pizza Ordering App

Welcome to **FirePie Express**, a fully responsive pizza ordering web application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This app allows users to browse pizzas, customize orders, manage cart quantities, and simulate delivery countdown—all in one seamless experience.

---

## ✨ Features

- ✅ View and customize pizzas from the menu
- ✅ Add items to cart, adjust quantity (max 10 per item)
- ✅ Form validation for customer info (with phone regex check)
- ✅ Priority order option with extra fee and faster delivery time
- ✅ Order summary page with a live delivery countdown timer
- ✅ Fully responsive design and mobile-friendly UI

---

## 🛠️ Tech Stack

| Category      | Tech Used                        |
| ------------- | -------------------------------- |
| Frontend      | React, Vite                      |
| State Mgmt    | Redux Toolkit                    |
| Styling       | Tailwind CSS                     |
| Routing       | React Router                     |
| Form Handling | React built-in form + validation |
| Deployment    | GitHub Pages / Vercel (optional) |

---

## 🚚 Delivery Timer Logic

A dynamic delivery countdown is implemented using `useRef` + `useEffect` + `setInterval` to simulate the time left until delivery.  
It updates every second and visually reflects when the order has been delivered.

```
const deliveryTimeRef = useRef(Date.now() + deliveryDuration * 60 * 1000);
```

---

## 🔐 Form Validation

- Uses required HTML attributes for basic validation.
- Custom validation added for UK phone number using:

```
/^\+44\s?\d{3}\s?\d{3}\s?\d{4}$/
```

---

## ➕ Cart Quantity Logic

- Users can increase/decrease item quantity in cart
- Quantity capped at 10 per item
- **+**button becomes disabled once quantity reaches 10

```
<button disabled={quantity >= 10}>+</button>
```

---

## 🧪 Available Redux Slices

- userSlice – stores user name
- cartSlice – handles cart items, quantity, total price
- orderSlice – handles order summary, fees, final total

---

## 📂 Project Structure

src/
│
├── features/
│ ├── Cart/
│ │ ├── cartSlice.js
│ │ └── UpdateCartQuantity.jsx
│ ├── Order/
│ │ ├── CreateOrder.jsx
│ │ ├── Order.jsx
│ │ └── orderSlice.js
│ └── User/
│ └── userSlice.js
│
├── utils/
│ └── CountdownTimer.jsx
│
├── App.jsx
└── main.jsx
