const slides = document.getElementsByClassName("carousel-item");
// console.log(slides);
const dots = document.querySelectorAll(".dot");
// console.log(dots);
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

  // hide all slides
  var x;
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
    // dots[x].className = "dot";
  }

  // hide all dots
  var y;
  for (y = 0; y < slides.length; y++) {
    // dots[y].className = "dot";
    dots[y].classList.remove("active");
    // dots[y].className = dots[y].className.replace("active", "");
  }

  if (slidenum > slides.length) {
    currslide = 1;
  } else if (slidenum < 1) {
    currslide = slides.length;
  }
  console.log(currslide);

  slides[currslide - 1].style.display = "block";

  dots[currslide - 1].classList.add("active");
  // dots[currslide - 1].className("dot active");
  // dots[currslide - 1].className += " active";
}

// slides       0     1     2
// currslide    1-1   2-1   3-1

var q = 0;
for (q; q < dots.length; q++) {
  dots[q].addEventListener("click", function (e) {
    // console.log("hey");
    currslide = this.getAttribute("data-bs-slide-to");
    carousel(currslide);
  });
}

// 13CU
