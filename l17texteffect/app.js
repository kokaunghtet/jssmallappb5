// Get UI
const languages = ["Nodejs", "Reactjs", "Vuejs", "Laravel"];
const colors = ["red", "skyblue", "violet", "yellow"];
const gettxtani = document.querySelector(".txtani");
const gettxtlights = document.querySelectorAll(".text-light");

function* generator() {
  let i = 0;

  while (true) {
    yield i++;

    if (i > languages.length - 1) {
      i = 0;
    }
  }
}

const genfun = generator();
// console.log(genfun.next()); // {value: 0, done: false}
// console.log(genfun.next().value); // 0
// console.log(genfun.next().value); // 1

// console.log(languages[genfun.next().value]); // Nodejs
// console.log(languages[genfun.next().value]); // Reactjs

function showwords(word) {
  // console.log(word); // Nodejs
  // console.log(word[0]); // N

  let x = 0;
  gettxtani.innerHTML = "";
  gettxtani.classList.add(colors[languages.indexOf(word)]);

  // gettxtani.textContent = word;
  // gettxtani.textContent = word[0];       //N
  // gettxtani.textContent += word[1];      //No
  // gettxtani.textContent += word[2];      //Nod

  let showinterval = setInterval(function () {
    if (x >= word.length) {
      clearInterval(showinterval);
      deletewords();
    } else {
      gettxtani.textContent += word[x];
      x++;
    }
  }, 200);
}

showwords(languages[genfun.next().value]); // showwords("Nodejs")

function deletewords() {
  let getword = gettxtani.innerHTML;
  // console.log(getword); // Nodejs

  let getlastidx = getword.length - 1; // 6 - 1
  // console.log(getlastidx); // 5

  // Nodejs  0 1 2 3 4 5
  // Nodej   0 1 2 3 4
  // Node    0 1 2 3
  // Nod     0 1 2
  // No      0 1
  // N       0

  let delinterval = setInterval(function () {
    if (getlastidx >= 0) {
      gettxtani.innerHTML = gettxtani.innerHTML.substring(
        0,
        gettxtani.innerHTML.length - 1,
      );
      getlastidx--;
    } else {
      // remove previous colors
      gettxtani.classList.remove(colors[languages.indexOf(getword)]);

      // get new language
      showwords(languages[genfun.next().value]);
      clearInterval(delinterval);
    }
  }, 200);
}

gettxtlights.forEach(function (gettxtlight) {
  // console.log(gettxtlight);

  let arrtexts = gettxtlight.textContent.split("");
  // console.log(arrtexts);

  gettxtlight.textContent = "";

  arrtexts.forEach(function (arrtext, idx) {
    // console.log(arrtext);
    // console.log(idx);

    let newem = document.createElement("em");

    newem.textContent = arrtext;
    // console.log(newem);
    newem.style.animationDelay = `${idx * 0.5}s`;

    gettxtlight.append(newem);
  });
});
