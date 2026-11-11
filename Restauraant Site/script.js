
// The Urban Platter
// JavaScript functionality will be added in upcoming sections.

const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");
const bookingDate = document.getElementById("bookingDate");

// Prevent selecting a past date
const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

bookingDate.min = localToday;

// Handle reservation form
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    bookingMessage.textContent =
        "Thank you! Your reservation request has been submitted.";

    bookingMessage.style.color = "green";

    bookingForm.reset();

    bookingDate.min = localToday;
});
