// Get UI
const getCurMonth = document.getElementById("curMonth");
const getCurYear = document.getElementById("curYear");
const getUIMonths = document.getElementById("months");
const getUIYears = document.getElementById("years");
const getCalDays = document.getElementById("calDays");
const getMonthBtn = document.querySelector(".month-btn");
const getYearBtn = document.querySelector(".year-btn");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let startYear = 2020;
let endYear = 2030;

let month, year;

window.addEventListener("load", function () {
  // console.log("Hey I am working");

  let getDay = new Date();
  month = getDay.getMonth();
  year = getDay.getFullYear();

  // console.log(getDay); // Fri Apr 19 2024 20:49:53 GMT+0630 (Myanmar Time)
  // console.log(month); // 3
  // console.log(year); // 2024

  getCurMonth.textContent = months[month];
  getCurYear.textContent = year;

  initMonths();
  initYears();
  initDays();
});

function initMonths() {
  // console.log("I am month");

  getUIMonths.innerHTML = "";

  // <div class="dropdown-item">Jan </div>

  for (let x = 0; x < months.length; x++) {
    // console.log(x); // 0 to 11

    const newDiv = document.createElement("div");
    newDiv.textContent = months[x];
    newDiv.classList.add("dropdown-item");

    // console.log(x); // 0 to 11

    // newDiv.addEventListener("click", function () {
    // Method I
    // console.log(x); // current month index
    // console.log(months[x]);
    // month = x;
    // getCurMonth.textContent = months[x];
    // initDays();
    // ----------
    // Method II
    // console.log(this);
    // console.log(this.textContent);
    // month = months.indexOf(this.textContent);
    // console.log(month);
    // getCurMonth.textContent = months[month];
    // initDays();
    // });

    // Method III
    newDiv.onclick = updateDaysMonth(x);

    // console.log(newDiv);
    getUIMonths.appendChild(newDiv);
  }
}

function updateDaysMonth(idx) {
  // console.log(idx); // 0 to 11

  let selectMonth = idx;
  // console.log(selectMonth); // 0 to 11

  return function () {
    month = selectMonth;
    // console.log(month);

    getCurMonth.textContent = months[month];
    initDays();
  };
}

function initYears() {
  // console.log("I am year");

  getUIYears.innerHTML = "";

  for (let x = startYear; x <= endYear; x++) {
    // console.log(x); // 2020 to 2030

    const newDiv = document.createElement("div");
    newDiv.textContent = x;
    newDiv.classList.add("dropdown-item");

    // newDiv.addEventListener("click", function () {
    // Method 1
    // console.log(x); // 2020, 2021, etc...
    // year = x;
    // getCurYear.textContent = year;
    // initDays();
    // ----------
    // Method II
    // console.log(this);
    // console.log(this.textContent); // 2020, 2021, etc...
    // year = this.textContent;
    // getCurYear.textContent = year;
    // initDays();
    // ----------
    // });

    // Method III
    // newDiv.onclick = updateYearsByYear(x);

    // Method IV
    // newDiv.onclick = () => {
    //   console.log(x); // 2020 to 2030
    //   year = x;
    //   getCurYear.textContent = year;
    //   initDays();
    // };

    // Method V
    // Self-invoking Function
    newDiv.onclick = (function () {
      // console.log(x); // 2020 to 2030

      let selectYear = x;
      // console.log(selectYear); // 2020 to 2030

      return function () {
        year = selectYear;
        // console.log(year);
        getCurYear.textContent = year;
        initDays();
      };
    })();

    // console.log(newDiv);
    getUIYears.appendChild(newDiv);
  }
}

// function updateYearsByYear(idx) {
//   // console.log(idx); // 2020 to 2030
//   let selectYear = idx;
//   // console.log(selectYear); // 2020 to 2030
//   return function () {
//     year = selectYear;
//     // console.log(year);
//     getCurYear.textContent = year;
//     initDays();
//   };
// }

function initDays() {
  // console.log("I am day");

  getCalDays.innerHTML = "";

  let tmpDays = new Date(year, month, 0);
  // console.log(tmpDays); // Fri Apr 19 2024 21:44:18 GMT+0630 (Myanmar Time)
  let getAllDays = allDays(year, month);
  // console.log(getAllDays); // 30
  let getPrevEndDay = tmpDays.getDay();
  // console.log(getPrevEndDay); // 0

  for (let x = 0; x <= getPrevEndDay; x++) {
    // console.log(x); // 0

    // <label class="day blank"></label>
    let newLabel = document.createElement("label");
    newLabel.className = "day blank";
    // console.log(newLabel);
    getCalDays.appendChild(newLabel);
  }

  for (let y = 0; y < getAllDays; y++) {
    // console.log(y); // 0 to 29

    let eachDay = y + 1;

    // <label class="day">1</label>
    let newLabel = document.createElement("label");
    newLabel.textContent = eachDay;
    newLabel.classList.add("day");
    // console.log(newLabel);
    getCalDays.appendChild(newLabel);
  }
}

function allDays(year, month) {
  // console.log(year, month); // 2024 3

  let curAllDays = new Date(year, month + 1, 0);
  // console.log(curAllDays); // Tue Apr 30 2024 00:00:00 GMT+0630 (Myanmar Time)
  curAllDays = curAllDays.getDate();
  // console.log(curAllDays); // 30
  return curAllDays;
}

// getMonthBtn.addEventListener("click", function () {
//   if (this.lastElementChild.classList.contains("show")) {
//     this.lastElementChild.classList.remove("show");
//   } else {
//     this.lastElementChild.classList.add("show");
//   }
// });

getYearBtn.addEventListener("click", function () {
  if (this.lastElementChild.classList.contains("show")) {
    this.lastElementChild.classList.remove("show");
  } else {
    this.lastElementChild.classList.add("show");
  }
});

// console.log(new Date()); // Fri Apr 12 2024 22:12:12 GMT+0630 (Myanmar Time)
// console.log(new Date(2023, 1, 10)); // Fri Feb 10 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023, 0, 0)); // Sat Dec 31 2022 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023, 5, 0)); // Wed May 31 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023, 1, 30)); // Thu Mar 02 2023 00:00:00 GMT+0630 (Myanmar Time)

// 19CA
