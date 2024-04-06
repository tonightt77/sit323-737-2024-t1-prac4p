const express = require("express");
const app = express();
const port = 3000;

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

// Function to validate numbers
function validateNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }
  return true;
}

// Addition endpoint
app.get("/add", (req, res) => {
  try {
    const { num1, num2 } = req.query;
    // Validate numbers
    if (!validateNumbers(parseFloat(num1), parseFloat(num2))) {
      // Return error if numbers are invalid
      throw new Error("Invalid numbers provided.");
    }
    // Perform addition
    const result = add(parseFloat(num1), parseFloat(num2));
    // Return the result
    res.status(200).json({ statuscode: 200, data: result });
  } catch (error) {
    console.error(error);
    // Return error if any exception occurs
    res.status(500).json({ statuscode: 500, message: error.toString() });
  }
});

// Subtraction endpoint
app.get("/subtract", (req, res) => {
  try {
    const { num1, num2 } = req.query;
    // Validate numbers
    if (!validateNumbers(parseFloat(num1), parseFloat(num2))) {
      // Return error if numbers are invalid
      throw new Error("Invalid numbers provided.");
    }
    // Perform subtraction
    const result = subtract(parseFloat(num1), parseFloat(num2));
    // Return the result
    res.status(200).json({ statuscode: 200, data: result });
  } catch (error) {
    console.error(error);
    // Return error if any exception occurs
    res.status(500).json({ statuscode: 500, message: error.toString() });
  }
});

// Multiplication endpoint
app.get("/multiply", (req, res) => {
  try {
    const { num1, num2 } = req.query;
    // Validate numbers
    if (!validateNumbers(parseFloat(num1), parseFloat(num2))) {
      // Return error if numbers are invalid
      throw new Error("Invalid numbers provided.");
    }
    // Perform multiplication
    const result = multiply(parseFloat(num1), parseFloat(num2));
    // Return the result
    res.status(200).json({ statuscode: 200, data: result });
  } catch (error) {
    console.error(error);
    // Return error if any exception occurs
    res.status(500).json({ statuscode: 500, message: error.toString() });
  }
});

// Division endpoint
app.get("/divide", (req, res) => {
  try {
    const { num1, num2 } = req.query;
    // Validate numbers
    if (!validateNumbers(parseFloat(num1), parseFloat(num2))) {
      // Return error if numbers are invalid
      throw new Error("Invalid numbers provided.");
    }
    // Check if dividing by zero
    if (parseFloat(num2) === 0) {
      // Return error if dividing by zero
      throw new Error("Cannot divide by zero.");
    }
    // Perform division
    const result = divide(parseFloat(num1), parseFloat(num2));
    // Return the result
    res.status(200).json({ statuscode: 200, data: result });
  } catch (error) {
    console.error(error);
    // Return error if any exception occurs
    res.status(500).json({ statuscode: 500, message: error.toString() });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator microservice listening at http://localhost:${port}`);
});
