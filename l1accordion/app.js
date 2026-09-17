//25 August
// 8 September

const ACCORDIAN_TITLES = document.getElementsByClassName("acctitle");
// console.log(ACCORDIAN_TITLES); // => HTMLCollection

const ACCORDIAN_CONTENTS = document.querySelectorAll(".acccontent");
// console.log(ACCORDIAN_CONTENTS); // => NodeList

// console.log(ACCORDIAN_TITLES.length); //4

// console.log(ACCORDIAN_TITLES[0]);
// console.log(ACCORDIAN_TITLES[1]);
// console.log(ACCORDIAN_TITLES[2]);
// console.log(ACCORDIAN_TITLES[3]);

for (var x = 0; x < ACCORDIAN_TITLES.length; x++) {
  // console.log(x); //0,1,2,3
  // console.log(ACCORDIAN_TITLES[x]);

  ACCORDIAN_TITLES[x].addEventListener("click", function (e) {
    // console.log("hey");
    // console.log(e);
    // console.log(e.target);
    // console.log(this);
    // console.log(ACCORDIAN_TITLES[x]); //undefined

    // ACCORDIAN_TITLES[x].classList.toggle("active"); //error
    // e.target.classList.toggle("active");
    this.classList.toggle("active");

    // 8 September
    // -------------------------------------------

    //                 acctitle   acccontent
    const getcontent = this.nextElementSibling;
    // console.log(getcontent);
    // console.log(getcontent.scrollHeight); //number only

    if (getcontent.style.height) {
      // remove
      getcontent.style.height = null;
      // beware can't set 0
    } else {
      //add
      getcontent.style.height = getcontent.scrollHeight + "px";
    }
  });

  if (ACCORDIAN_TITLES[x].classList.contains("active")) {
    ACCORDIAN_CONTENTS[x].style.height =
      ACCORDIAN_CONTENTS[x].scrollHeight + "px";
  }
}
