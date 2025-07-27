const examDate = new Date("2025-12-01"); 
const today = new Date();
const timeDiff = examDate - today;
const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
document.getElementById("days-left").textContent = daysLeft;
