// Current date and time
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Creating a specific date and time
let specificDate = new Date(2022, 0, 15, 12, 30, 0); // Year, Month (0-indexed), Day, Hour, Minute, Second
console.log("Specific Date and Time:", specificDate);

// Get individual components of a date
let year = currentDate.getFullYear();
let month = currentDate.getMonth(); // Note: Months are 0-indexed
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log(`Year: ${year}, Month: ${month + 1}, Day: ${day}, Time: ${hours}:${minutes}:${seconds}`);

// Formatting date to a custom string
let formattedDate = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short"
});

console.log("Formatted Date:", formattedDate);

// Adding and subtracting time
let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 7); // Adding 7 days
console.log("Date 7 days from now:", futureDate);

// Difference between two dates
let date1 = new Date(2022, 0, 1);
let date2 = new Date(2022, 0, 15);
let timeDifference = date2 - date1; // Difference in milliseconds
let daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

console.log("Difference between two dates (in days):", daysDifference);
