// ==============================
// Part 1: Event Handling Example
// ==============================

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counterDisplay");

counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = `Score: ${count}`;
});

// ==============================
// Part 2: Interactive Elements
// ==============================

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ==============================
// Part 3: Form Validation
// ==============================

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

// Helper function to validate email format
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop default form submission
  let isValid = true;

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate email
  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate password (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success message
  if (isValid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "❌ Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
