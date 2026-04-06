// app/components/PracticalExample.tsx
"use client";

import { useState, FormEvent, ChangeEvent } from "react";

// ============================================
// PRACTICAL EXAMPLE - Real-world usage
// ============================================

// Type definitions
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: Date;
}

type FilterType = "all" | "active" | "completed";

// Component props
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// Sub-component with proper typing
const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  return (
    <div className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[todo.priority]}`}
        >
          {todo.priority}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

// Main component
const PracticalExample = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Learn TypeScript",
      completed: false,
      priority: "high",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Build Next.js app",
      completed: false,
      priority: "medium",
      createdAt: new Date(),
    },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");
  const [priority, setPriority] = useState<Todo["priority"]>("medium");
  const [filter, setFilter] = useState<FilterType>("all");

  // Event handler with proper typing
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo: Todo = {
      id: Date.now(),
      title: newTodo,
      completed: false,
      priority,
      createdAt: new Date(),
    };

    setTodos([todo, ...todos]);
    setNewTodo("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(e.target.value);
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold">Todo App with TypeScript</h2>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-3 rounded text-center">
          <div className="text-2xl font-bold">{stats.total}</div>
          <div className="text-sm">Total</div>
        </div>
        <div className="bg-yellow-100 p-3 rounded text-center">
          <div className="text-2xl font-bold">{stats.active}</div>
          <div className="text-sm">Active</div>
        </div>
        <div className="bg-green-100 p-3 rounded text-center">
          <div className="text-2xl font-bold">{stats.completed}</div>
          <div className="text-sm">Completed</div>
        </div>
      </div>

      {/* Add Todo Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-3"
      >
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-2">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Todo["priority"])}
            className="px-4 py-2 border rounded"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>
      </form>

      {/* Filters */}
      <div className="flex space-x-2 border-b pb-2">
        {(["all", "active", "completed"] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded ${
              filter === f
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Todo List */}
      <div className="space-y-2">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
        {filteredTodos.length === 0 && (
          <p className="text-center text-gray-500 py-8">No todos found</p>
        )}
      </div>
    </div>
  );
};

export default PracticalExample;
