// app/components/GenericsDemo.tsx
"use client";

import { useState } from "react";

// ============================================
// GENERICS - Create reusable components/functions
// ============================================

// Generic function - works with any type
function identity<T>(value: T): T {
  return value;
}

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Generic component props
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  title?: string;
}

// Generic component
function GenericList<T>({ items, renderItem, title }: ListProps<T>) {
  return (
    <div className="border p-4 rounded">
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
}

// Different types of data
interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

const GenericsDemo = () => {
  // Using generic function
  const stringResult = identity<string>("Hello"); // TypeScript knows this is string
  const numberResult = identity<number>(42); // TypeScript knows this is number

  // Using ApiResponse with different types
  const userResponse: ApiResponse<User> = {
    data: { id: 1, name: "John" },
    status: 200,
    message: "Success",
  };

  const productResponse: ApiResponse<Product[]> = {
    data: [
      { id: 1, title: "Laptop", price: 999 },
      { id: 2, title: "Mouse", price: 29 },
    ],
    status: 200,
    message: "Products fetched",
  };

  // Data for generic list
  const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const products: Product[] = [
    { id: 1, title: "Laptop", price: 999 },
    { id: 2, title: "Phone", price: 699 },
    { id: 3, title: "Tablet", price: 399 },
  ];

  return (
    <div className="p-4 space-y-4">
      <h2 className="font-bold text-xl">Generics Demo</h2>

      <div className="border p-4 rounded">
        <h3 className="font-semibold">Generic Function Results:</h3>
        <p>String: {stringResult} (type: string)</p>
        <p>Number: {numberResult} (type: number)</p>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-semibold">API Response:</h3>
        <p>User: {userResponse.data.name}</p>
        <p>Status: {userResponse.status}</p>
      </div>

      {/* Generic List with Users */}
      <GenericList
        items={users}
        title="User List"
        renderItem={(user) => (
          <div className="flex justify-between">
            <span>{user.name}</span>
            <span className="text-sm text-gray-500">ID: {user.id}</span>
          </div>
        )}
      />

      {/* Generic List with Products */}
      <GenericList
        items={products}
        title="Product List"
        renderItem={(product) => (
          <div className="flex justify-between">
            <span>{product.title}</span>
            <span className="text-blue-600">${product.price}</span>
          </div>
        )}
      />
    </div>
  );
};

export default GenericsDemo;
