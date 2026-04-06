// app/components/InterfacesAndTypes.tsx
"use client";

import { useState } from "react";

// ============================================
// INTERFACES - Define shapes of objects
// ============================================

// Interface for a User object
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property (with ?)
  readonly createdAt: Date; // Can't be modified after creation
}

// Interface extending another interface
interface Admin extends User {
  role: "admin" | "superadmin"; // Union type
  permissions: string[];
}

// Interface for component props
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

// ============================================
// TYPE ALIASES - Similar to interfaces but can do more
// ============================================

// Type for union (can be one of several types)
type Status = "pending" | "loading" | "success" | "error";

// Type for function signature
type MathOperation = (x: number, y: number) => number;

// Type for combining types
type Product = {
  id: number;
  name: string;
  price: number;
};

type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type ProductWithTimestamps = Product & Timestamps; // Intersection type

// ============================================
// COMPONENT WITH INTERFACES
// ============================================

// Button component using the ButtonProps interface
const CustomButton = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses[variant]} text-white px-4 py-2 rounded disabled:opacity-50`}
    >
      {label}
    </button>
  );
};

// Main component
const InterfacesAndTypes = () => {
  const [status, setStatus] = useState<Status>("pending");

  // Using the User interface
  const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    createdAt: new Date(),
  };

  // Using the Admin interface
  const admin: Admin = {
    id: 2,
    name: "Jane Admin",
    email: "admin@example.com",
    createdAt: new Date(),
    role: "admin",
    permissions: ["read", "write", "delete"],
  };

  // Using the MathOperation type
  const add: MathOperation = (x, y) => x + y;
  const multiply: MathOperation = (x, y) => x * y;

  // Using ProductWithTimestamps
  const product: ProductWithTimestamps = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const handleClick = () => {
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-bold text-xl">Interfaces & Types Demo</h2>

      <div className="border p-4 rounded">
        <h3 className="font-semibold">User Object:</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age || "Not provided"}</p>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-semibold">Admin Object:</h3>
        <p>Name: {admin.name}</p>
        <p>Role: {admin.role}</p>
        <p>Permissions: {admin.permissions.join(", ")}</p>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-semibold">Math Operations:</h3>
        <p>10 + 5 = {add(10, 5)}</p>
        <p>10 × 5 = {multiply(10, 5)}</p>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-semibold">Status: {status}</h3>
        <CustomButton
          label="Change Status"
          onClick={handleClick}
          variant="primary"
        />
      </div>
    </div>
  );
};

export default InterfacesAndTypes;
