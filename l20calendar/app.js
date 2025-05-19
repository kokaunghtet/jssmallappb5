// Get UI
const getcurmonth = document.getElementById("curmonth");
const getcuryear = document.getElementById("curyear");
const getuimonths = document.getElementById("months");
const getuiyears = document.getElementById("years");
const getcaldays = document.getElementById("caldays");
const getmonthbtn = document.querySelector(".month-btn");
const getyearbtn = document.querySelector(".year-btn");

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
let startyear = 2020;
let endyear = 2030;

let month, year;

window.addEventListener("load", function () {
  // console.log("Hey I am working");

  let getday = new Date();
  month = getday.getMonth();
  year = getday.getFullYear();

  // console.log(getday); // Fri Apr 19 2024 20:49:53 GMT+0630 (Myanmar Time)
  // console.log(month); // 3
  // console.log(year); // 2024

  getcurmonth.textContent = months[month];
  getcuryear.textContent = year;

  initmonths();
  inityears();
  initdays();
});

function initmonths() {
  // console.log("I am month");

  getuimonths.innerHTML = "";

  // <div class="dropdown-item">Jan </div>

  for (let x = 0; x < months.length; x++) {
    // console.log(x); // 0 to 11

    const newdiv = document.createElement("div");
    newdiv.textContent = months[x];
    newdiv.classList.add("dropdown-item");

    // console.log(x); // 0 to 11

    // newdiv.addEventListener("click", function () {
    // Method I
    // console.log(x); // current month index
    // console.log(months[x]);
    // month = x;
    // getcurmonth.textContent = months[x];
    // initdays();
    // ----------
    // Method II
    // console.log(this);
    // console.log(this.textContent);
    // month = months.indexOf(this.textContent);
    // console.log(month);
    // getcurmonth.textContent = months[month];
    // initdays();
    // });

    // Method III
    newdiv.onclick = updatedaysmonth(x);

    // console.log(newdiv);
    getuimonths.appendChild(newdiv);
  }
}

function updatedaysmonth(idx) {
  // console.log(idx); // 0 to 11

  let selectmonth = idx;
  // console.log(selectmonth); // 0 to 11

  return function () {
    month = selectmonth;
    // console.log(month);

    getcurmonth.textContent = months[month];
    initdays();
  };
}

function inityears() {
  // console.log("I am year");

  getuiyears.innerHTML = "";

  for (let x = startyear; x <= endyear; x++) {
    // console.log(x); // 2020 to 2030

    const newdiv = document.createElement("div");
    newdiv.textContent = x;
    newdiv.classList.add("dropdown-item");

    // newdiv.addEventListener("click", function () {
    // Method 1
    // console.log(x); // 2020, 2021, etc...
    // year = x;
    // getcuryear.textContent = year;
    // initdays();
    // ----------
    // Method II
    // console.log(this);
    // console.log(this.textContent); // 2020, 2021, etc...
    // year = this.textContent;
    // getcuryear.textContent = year;
    // initdays();
    // ----------
    // });

    // Method III
    // newdiv.onclick = updateyearsbyyear(x);

    // Method IV
    // newdiv.onclick = () => {
    //   console.log(x); // 2020 to 2030
    //   year = x;
    //   getcuryear.textContent = year;
    //   initdays();
    // };

    // Method V
    // Self-invoking Function
    newdiv.onclick = (function () {
      // console.log(x); // 2020 to 2030

      let selectyear = x;
      // console.log(selectyear); // 2020 to 2030

      return function () {
        year = selectyear;
        // console.log(year);
        getcuryear.textContent = year;
        initdays();
      };
    })();

    // console.log(newdiv);
    getuiyears.appendChild(newdiv);
  }
}

// function updateyearsbyyear(idx) {
//   // console.log(idx); // 2020 to 2030
//   let selectyear = idx;
//   // console.log(selectyear); // 2020 to 2030
//   return function () {
//     year = selectyear;
//     // console.log(year);
//     getcuryear.textContent = year;
//     initdays();
//   };
// }

function initdays() {
  // console.log("I am day");

  getcaldays.innerHTML = "";

  let tmpdays = new Date(year, month, 0);
  // console.log(tmpdays); // Fri Apr 19 2024 21:44:18 GMT+0630 (Myanmar Time)
  let getalldays = alldays(year, month);
  // console.log(getalldays); // 30
  let getprevendday = tmpdays.getDay();
  // console.log(getprevendday); // 0

  for (let x = 0; x <= getprevendday; x++) {
    // console.log(x); // 0

    // <label class="day blank"></label>
    let newlabel = document.createElement("label");
    newlabel.className = "day blank";
    // console.log(newlabel);
    getcaldays.appendChild(newlabel);
  }

  for (let y = 0; y < getalldays; y++) {
    // console.log(y); // 0 to 29

    let eachday = y + 1;

    // <label class="day">1</label>
    let newlabel = document.createElement("label");
    newlabel.textContent = eachday;
    newlabel.classList.add("day");
    // console.log(newlabel);
    getcaldays.appendChild(newlabel);
  }
}

function alldays(year, month) {
  // console.log(year, month); // 2024 3

  let curalldays = new Date(year, month + 1, 0);
  // console.log(curalldays); // Tue Apr 30 2024 00:00:00 GMT+0630 (Myanmar Time)
  curalldays = curalldays.getDate();
  // console.log(curalldays); // 30
  return curalldays;
}

// getmonthbtn.addEventListener("click", function () {
//   if (this.lastElementChild.classList.contains("show")) {
//     this.lastElementChild.classList.remove("show");
//   } else {
//     this.lastElementChild.classList.add("show");
//   }
// });

getyearbtn.addEventListener("click", function () {
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
