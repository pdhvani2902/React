import React from "react";

function VotingEligibility({ age }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Voting Eligibility Check</h2>
      {age >= 18 ? (
        <p>You are eligible to vote </p>
      ) : (
        <p>You are not eligible to vote </p>
      )}
    </div>
  );
}

export default VotingEligibility;
