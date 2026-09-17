const SLIDES = document.getElementsByClassName("carousel-item");
// console.log(SLIDES);
const DOTS = document.querySelectorAll(".dot");
// console.log(DOTS);
let currslide = 1;

document.getElementById("prev").addEventListener("click", function (e) {
  // console.log((currslide -= 1)); // before printout
  // console.log(currslide--);  // after printout
  carousel((currslide -= 1));
});

document.getElementById("next").addEventListener("click", function (e) {
  // console.log((currslide += 1));
  // console.log(currslide++);
  carousel((currslide += 1));
});

carousel(currslide);

function carousel(slidenum) {
  // currslide 1 to 3 & 3 to 1
  // console.log(slidenum);

  // hide all SLIDES
  let x;
  for (x = 0; x < SLIDES.length; x++) {
    SLIDES[x].style.display = "none";
    // DOTS[x].className = "dot";
  }

  // hide all DOTS
  let y;
  for (y = 0; y < SLIDES.length; y++) {
    // DOTS[y].className = "dot";
    DOTS[y].classList.remove("active");
    // DOTS[y].className = DOTS[y].className.replace("active", "");
  }

  if (slidenum > SLIDES.length) {
    currslide = 1;
  } else if (slidenum < 1) {
    currslide = SLIDES.length;
  }
  // console.log(currslide);

  SLIDES[currslide - 1].style.display = "block";

  DOTS[currslide - 1].classList.add("active");
  // DOTS[currslide - 1].className("dot active");
  // DOTS[currslide - 1].className += " active";
}

// SLIDES       0     1     2
// currslide    1-1   2-1   3-1

let q = 0;
for (q; q < DOTS.length; q++) {
  DOTS[q].addEventListener("click", function (e) {
    // console.log("hey");
    currslide = this.getAttribute("data-bs-slide-to");
    carousel(currslide);
  });
}

// 13CU
