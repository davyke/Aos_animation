import React, { useState } from "react";
import "../styles.css";
const Body = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const totalPayments = loanTerm * 12;

    if (monthlyInterestRate === 0) {
      setMonthlyPayment(loanAmount / totalPayments);
    } else {
      const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
      setMonthlyPayment((loanAmount * monthlyInterestRate) / denominator);
    }
  };

  return (
    <div className="body">
      <label data-aos="flip-left" className="lable">
        <p>Kindly input the your salary</p>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
        />
      </label>
      <label data-aos="zoom-in" className="lable">
        <p>Interest Rate (%):</p>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
      </label>

      <label
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="lable"
      >
        <p>Loan Term (years): </p>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
        />
      </label>
      <button
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="btn"
        onClick={calculateMonthlyPayment}
      >
        Calculate
      </button>
      <p className="show">Monthly Payment: </p>
      <p className="value">${monthlyPayment.toFixed(2)}</p>
    </div>
  );
};
export default Body;
