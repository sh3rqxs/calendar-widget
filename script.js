function updateCalendar() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthsArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  const month = monthsArray[currentDate.getMonth()];

  document.getElementById("day").textContent = day;
  document.getElementById("month").textContent = month;
}

updateCalendar();