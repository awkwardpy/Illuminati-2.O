// Get references to form elements
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Event listener for form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get user input
  const email = emailInput.value;
  const password = passwordInput.value;

  // Call the authentication function (e.g., signInWithEmailPassword)
  signInWithEmailPassword(email, password);
});

// Function to handle login (you should define this function)
function signInWithEmailPassword(email, password) {
  // Implement Firebase authentication logic here
  // For example:
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
      // Redirect or perform other actions as needed
    })
    .catch((error) => {
      // Handle sign-in errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      // Display error message to the user, if desired
    });
}
