//25 August
// 8 September

const getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles); // => HTMLCollection

const getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacccontents); // => NodeList

// console.log(getacctitles.length); //4

// console.log(getacctitles[0]);
// console.log(getacctitles[1]);
// console.log(getacctitles[2]);
// console.log(getacctitles[3]);

for (var x = 0; x < getacctitles.length; x++) {
  // console.log(x); //0,1,2,3
  // console.log(getacctitles[x]);

  getacctitles[x].addEventListener("click", function (e) {
    // console.log("hey");
    // console.log(e);
    // console.log(e.target);
    // console.log(this);
    // console.log(getacctitles[x]); //undefined

    // getacctitles[x].classList.toggle("active"); //error
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

  if (getacctitles[x].classList.contains("active")) {
    getacccontents[x].style.height = getacccontents[x].scrollHeight + "px";
  }
}
