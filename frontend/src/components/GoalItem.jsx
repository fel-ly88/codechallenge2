import React, { useState } from "react";

export default function GoalItem({ goal, updateGoal, deleteGoal }) {
  const [deposit, setDeposit] = useState("");

  const handleDeposit = () => {
    const newAmount = goal.savedAmount + Number(deposit);
    updateGoal(goal.id, { savedAmount: newAmount });
    setDeposit("");
  };

  const progress = (goal.savedAmount / goal.targetAmount) * 100;

  const deadlineDate = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadlineDate - new Date()) / (1000 * 60 * 60 * 24));

  const isCompleted = goal.savedAmount >= goal.targetAmount;
  const isOverdue = daysLeft < 0 && !isCompleted;
  const isWarning = daysLeft <= 30 && !isCompleted;

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <p>Deadline: {goal.deadline}</p>
      <p>Days Left: {daysLeft}</p>
      <div style={{ background: "#eee", borderRadius: "5px" }}>
        <div style={{ width: `${progress}%`, background: "green", color: "white", padding: "2px" }}>
          {Math.min(progress, 100).toFixed(1)}%
        </div>
      </div>
      {isWarning && <p style={{ color: "orange" }}>⚠️ Deadline approaching!</p>}
      {isOverdue && <p style={{ color: "red" }}>❌ Goal overdue</p>}
      <input type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} placeholder="Add Deposit" />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={() => deleteGoal(goal.id)}>Delete</button>
    </div>
  );
}