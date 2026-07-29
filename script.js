let darkButton = document.getElementById("dark-mode-button");

// When the button's clicked
darkButton.addEventListener("click", function() {
    // Turn dark mode on/off
    document.body.classList.toggle("dark-mode");
    // Check if dark mode's active
    if (document.body.classList.contains("dark-mode")) {
        // Save dark mode preference
        localStorage.setItem("theme", "dark");
        // Change button text
        darkButton.textContent = "☀️ Light Mode";
    } else {
        // Save light mode preference
        localStorage.setItem("theme", "light");
        // Change button text
        darkButton.textContent = "🌙 Dark Mode";
    }
});

// When the page loads, check saved theme
if (localStorage.getItem("theme") === "dark") {
        // Enable dark mode
        document.body.classList.add("dark-mode");
        // Change button text
        darkButton.textContent = "☀️ Light Mode";
}