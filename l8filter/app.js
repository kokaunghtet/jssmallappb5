// Get UI

let getInput = document.getElementById("search");

let getsortazm1btn = document.getElementById("sortazm1"),
  getsortzam1btn = document.getElementById("sortzam1"),
  getsortazm2btn = document.getElementById("sortazm2"),
  getsortzam2btn = document.getElementById("sortzam2");

let getul = document.getElementById("members");
let getlis = getul.getElementsByTagName("li"); // it means "ul out ka li". document nk ll yay loh ya.

getsortazm1btn.addEventListener("click", sortingazm1);
getsortzam1btn.addEventListener("click", sortingzam1);

getsortazm2btn.addEventListener("click", sortingazm2);
getsortzam2btn.addEventListener("click", sortingzam2);

getInput.addEventListener("keyup", filter);

function filter() {
  var getlink;

  var filter = this.value.toLowerCase();
  // console.log(filter);

  for (x = 0; x < getlis.length; x++) {
    // console.log(x);

    getlink = getlis[x].getElementsByTagName("a")[0];
    // console.log(getlink);

    var getatext = getlink.textContent || getlink.innerHTML;
    // console.log(getatext);
    // console.log(getatext.toLowerCase());

    if (getatext.toLowerCase().indexOf(filter) > -1) {
      getlis[x].style.display = "";
    } else {
      getlis[x].style.display = "none";
    }
  }
}

// method 1
function sortingazm1() {
  // console.log("method 1 a to z");

  var lis = [];

  for (var i = 0; i < getlis.length; i++) {
    // console.log(getlis[i]);
    // console.log(getlis[i].innerHTML);
    // console.log(getlis[i].textContent);

    lis.push(getlis[i].textContent);
  }

  // console.log(lis);
  // console.log(lis.sort());
  // console.log(lis.reverse());
  // console.log(lis.sort().reverse());

  var azlis = lis.sort();

  getul.innerHTML = "";

  azlis.forEach(function (azli) {
    // console.log(azli);
    const newli = document.createElement("li");
    const newlink = document.createElement("a");
    newlink.href = "javascript:void(0)";

    newlink.appendChild(document.createTextNode(azli));
    // console.log(newlink);

    newli.appendChild(newlink);
    // console.log(newli);

    getul.appendChild(newli);
  });
}

function sortingzam1() {
  // console.log("method 1 z to a");

  var lis = [];

  for (var i = 0; i < getlis.length; i++) {
    // console.log(getlis[i]);
    // console.log(getlis[i].innerHTML);
    // console.log(getlis[i].textContent);

    lis.push(getlis[i].textContent);
  }

  // console.log(lis);
  // console.log(lis.sort());
  // console.log(lis.reverse());
  // console.log(lis.sort().reverse());

  var zalis = lis.sort().reverse();

  getul.innerHTML = "";

  zalis.forEach(function (zali) {
    // console.log(azli);
    const newli = document.createElement("li");
    const newlink = document.createElement("a");
    newlink.href = "javascript:void(0)";

    newlink.appendChild(document.createTextNode(zali));
    // console.log(newlink);

    newli.appendChild(newlink);
    // console.log(newli);

    getul.appendChild(newli);
  });
}

// console.log(getlis[0].textContent.toLowerCase()); // aung aung
// console.log(getlis[1].textContent.toLowerCase()); // mg mg

// if (getlis[0].textContent.toLowerCase() > getlis[1].textContent.toLowerCase()) {
//   console.log(true);
// } else if (
//   getlis[0].textContent.toLowerCase() === getlis[1].textContent.toLowerCase()
// ) {
//   console.log("equal");
// } else {
//   console.log(false);
// }

// method 2
function sortingazm2() {
  var shouldswitch = true;
  var switching = true;

  // console.log(getlis.length); // 29

  while (switching) {
    switching = false;

    var i;

    for (i = 0; i < getlis.length - 1; i++) {
      // console.log(i); // 0 to 27

      shouldswitch = false;

      if (
        getlis[i].textContent.toLowerCase() >
        getlis[i + 1].textContent.toLowerCase()
      ) {
        shouldswitch = true;
        break;
      }
    }

    // console.log(i); // 0
    if (shouldswitch) {
      // parent.insertBefore(new, exsiting);
      getlis[i].parentNode.insertBefore(getlis[i + 1], getlis[i]);
      switching = true;
    }
  }
}

function sortingzam2() {
  var shouldswitch = true;
  var switching = true;

  // console.log(getlis.length); // 28

  while (switching) {
    switching = false;

    var i;

    for (i = 0; i < getlis.length - 1; i++) {
      // console.log(i); // 0 to 27

      shouldswitch = false;

      if (
        getlis[i].textContent.toLowerCase() <
        getlis[i + 1].textContent.toLowerCase()
      ) {
        shouldswitch = true;
        break;
      }
    }

    // console.log(i); // 0
    if (shouldswitch) {
      // parent.insertBefore(new, exsiting);
      getlis[i].parentElement.insertBefore(getlis[i + 1], getlis[i]);
      switching = true;
    }
  }
}

// 22SW
