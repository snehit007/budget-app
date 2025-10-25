import React, { useState } from "react";

const BudgetCalculator = () => {
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [others, setOthers] = useState("");
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState("");

  const handleCalculate = () => {
    // Validation
    if (
      income === "" ||
      rent === "" ||
      food === "" ||
      transport === "" ||
      others === ""
    ) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    if (
      income < 0 ||
      rent < 0 ||
      food < 0 ||
      transport < 0 ||
      others < 0
    ) {
      alert("❌ All values must be positive!");
      return;
    }

    // Calculation
    const totalExpenses =
      Number(rent) + Number(food) + Number(transport) + Number(others);
    const remainingBalance = Number(income) - totalExpenses;

    setBalance(remainingBalance);

    if (remainingBalance < 0) {
      setMessage("You are overspending!");
    } else {
      setMessage("Good job managing your expenses!");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "12px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>💰 Budget Calculator</h2>

      <input
        type="number"
        placeholder="Monthly Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        style={{ margin: "8px", padding: "8px", width: "80%" }}
      />
      <input
        type="number"
        placeholder="Rent / EMI"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
        style={{ margin: "8px", padding: "8px", width: "80%" }}
      />
      <input
        type="number"
        placeholder="Food Expenses"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        style={{ margin: "8px", padding: "8px", width: "80%" }}
      />
      <input
        type="number"
        placeholder="Transport Expenses"
        value={transport}
        onChange={(e) => setTransport(e.target.value)}
        style={{ margin: "8px", padding: "8px", width: "80%" }}
      />
      <input
        type="number"
        placeholder="Other Expenses"
        value={others}
        onChange={(e) => setOthers(e.target.value)}
        style={{ margin: "8px", padding: "8px", width: "80%" }}
      />

      <button
        onClick={handleCalculate}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "12px"
        }}
      >
        Calculate Balance
      </button>

      {balance !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3
            style={{
              color: balance < 0 ? "red" : "green"
            }}
          >
            Remaining Balance: ₹{balance}
          </h3>
          <p
            style={{
              color: balance < 0 ? "red" : "green",
              fontWeight: "bold"
            }}
          >
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default BudgetCalculator;
