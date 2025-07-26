import React from "react";

export default function Overview({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const goalsCompleted = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="overview">
      <h2>Overview</h2>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {goalsCompleted}</p>
    </div>
  );
}
