import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    try {
      const formattedMobileNumber = "+92" + mobileNumber.substring(1); 

      const response = await axios.post("http://localhost:9090/backend/sendOtp.php", {
        mobileNumber: formattedMobileNumber,
      });

      alert(response.data.message);
      setStep(2); // Proceed to OTP verification step
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Try again!");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9090/backend/verifyOtp.php",
        { mobileNumber, otp }
      );
      alert(response.data.message);
      if (response.data.success) {
        setStep(3); // Proceed to next step after successful OTP verification
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("OTP verification failed!");
    }
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Verify OTP</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify</button>
        </div>
      )}
      {step === 3 && <h2>Signup Successful! Proceed to Profile Creation.</h2>}
    </div>
  );
};

export default SignupForm;
