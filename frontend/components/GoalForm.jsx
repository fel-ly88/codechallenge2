import React, { useState } from "react";

export default function GoalForm({ addGoal }) {
  const [form, setForm] = useState({
    name: "",
    targetAmount: "",
    savedAmount: 0,
    category: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      ...form,
      targetAmount: Number(form.targetAmount),
      savedAmount: Number(form.savedAmount),
      createdAt: new Date().toISOString().split("T")[0],
      id: crypto.randomUUID()
    };
    addGoal(newGoal);
    setForm({ name: "", targetAmount: "", savedAmount: 0, category: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal Name" value={form.name} onChange={handleChange} required />
      <input name="targetAmount" type="number" placeholder="Target" value={form.targetAmount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input name="deadline" type="date" value={form.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}
