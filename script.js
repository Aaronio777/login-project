const rememberCheckbox = document.getElementById("remember");
const storedUsername = localStorage.getItem("username");

if (storedUsername) {
  document.getElementById("username").value = storedUsername;
  rememberCheckbox.checked = true;
}

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.style.display = "none"; // Reset the error message

    // Validate length of username and password
    if (username.length < 4 || password.length < 4) {
      errorMessage.textContent =
        "Username and password must be at least 4 characters long.";
      errorMessage.style.display = "block";
      return;
    }

    // If they pass the length check, show success message
    alert("Data successfully accepted!");

    // Save username to localStorage if "Remember me" is checked
    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  });
