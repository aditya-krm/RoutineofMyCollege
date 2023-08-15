const schedules = {
    monday: ["Java - SBK ", "Automata - SGH", "GSC - KKA","DBMS - JAD",["B1 - Software Eng - JKL"],["B2 - AIML - TSI"]],
    tuesday: ["GSC - AKM ", "Java - SBK ", "HSM - KKA","AIML - TSI",["B1 - DBMS - JAD"],["B2 - Java - SBK"]],
    wednesday: ["Automata - SGH", ["B1 - AIML - TSI"],["B2 - Software Eng - JKL"], "Software Eng - JKL","HSM - KKA","MC - DME"],
    thursday: ["AIML - TSI", "DBMS - JAD","GSC- VKS","Software Eng - JKL","Automata - SGH","HSM - KKA"],
    friday: ["AIML - TSI", "Java - SBK", "Software Eng - JKL","DBMS - JAD",["B1 - Java - SBK"],["B2 - DBMS - JAD"]]
  };
  
  const daySelect = document.getElementById("day");
  const scheduleDisplay = document.querySelector(".display");
  
  daySelect.addEventListener("change", function () {
    const selectedDay = daySelect.value;
    
    if (selectedDay !== "none") {
      const selectedSchedule = schedules[selectedDay];
      displaySchedule(selectedSchedule);
    } else {
      clearScheduleDisplay();
    }
  });
  
  function displaySchedule(schedule) {
    scheduleDisplay.innerHTML = ""; // Clear existing content
  
    schedule.forEach(classTitle => {
      const classElement = document.createElement("div");
      classElement.classList.add("box");
      classElement.textContent = classTitle;
      scheduleDisplay.appendChild(classElement);
    });
  }
  
  function clearScheduleDisplay() {
    scheduleDisplay.innerHTML = "";
  }
