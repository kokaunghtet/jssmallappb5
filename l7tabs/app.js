// Get UI

let getTabLinks = document.getElementsByClassName("tablinks"), //HTMLCollection
  getTabPanels = document.getElementsByClassName("tab-panel"), //HTMLCollection
  getBtnClose = document.querySelectorAll(".btn-close"); //NodeList

// console.log(getTabLinks);
// console.log(getTabPanels);

// Change HTMLCollection to Array Fomat to use forEach
let tabPanels = Array.from(getTabPanels);
// console.log(tabPanels);

function gettab(evn, link) {
  // console.log(evn.target);
  // console.log(evn.currentTarget);
  // console.log(link);

  // Remove Active & Hide Tabpanel with btn-close
  for (let x = 0; x < getTabLinks.length; x++) {
    // console.log(x); // 0 to 3

    // remove active
    getTabLinks[x].className = getTabLinks[x].className.replace(" active", "");

    // hide tabpanel with btn-close
    getBtnClose[x].addEventListener("click", function () {
      this.parentElement.style.display = "none";
    });
  }

  // Add Active
  // evn.target.className = "tablinks active";
  // evn.target.className += " active";
  // evn.target.className = evn.target.className.replace(
  //   "tablinks",
  //   "tablinks active"
  // );
  evn.target.classList.add("active");

  // Hide Panel
  tabPanels.forEach(function (tabpanel) {
    tabpanel.style.display = "none";
  });

  // Show Panel
  document.getElementById(link).style.display = "block";
}

document.getElementById("autoclick").click();
