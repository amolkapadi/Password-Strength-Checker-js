const passwordInput = document.getElementById("password");
const strengthMsg = document.getElementById("strengthMsg");
const toggleBtn = document.getElementById("togglePassword");

// Strength checker
passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  const strength = checkStrength(value);

  strengthMsg.textContent = `Strength: ${strength.label}`;
  strengthMsg.className = `strength ${strength.class}`;
});

function checkStrength(password) {
  let strength = 0;

  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength <= 1) return { label: "Weak", class: "weak" };
  else if (strength === 2 || strength === 3)
    return { label: "Medium", class: "medium" };
  else return { label: "Strong", class: "strong" };
}

// Show/Hide password
toggleBtn.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type");
  if (type === "password") {
    passwordInput.setAttribute("type", "text");
    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.setAttribute("type", "password");
    toggleBtn.textContent = "Show";
  }
});
