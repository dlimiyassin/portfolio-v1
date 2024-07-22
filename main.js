
(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

})();

document.getElementById("downloadButton").addEventListener("click", function () {
  var pdfLink = document.getElementById("pdfLink");
  pdfLink.click();
});

document.getElementById("downloadButtonP").addEventListener("click", function () {
  var pptxLink = document.getElementById("pptxLink");
  pptxLink.click();
});




function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}


let language = {
  eng: {
    nav1: "Home",
    nav2: "About",
    nav3: "Experiance",
    nav4: "Skills",
    nav5: "Resume",
    nav6: "Projects",
    nav7: "Resume",
    nav8: "Contact",
  },
  fr: {
    nav1: "Accueil",
    nav2: "À propos",
    nav3: "Expérience",
    nav4: "Formation",
    nav5: "Compétences",
    nav6: "Projects",
    nav7: "CV",
    nav8: "Contact",
  },
};


if (window.location.hash) {

  if (window.location.hash == "#fr") {
    homee.textContent = language.fr.nav1;
    aboutt.textContent = language.fr.nav2;
    experiancee.textContent = language.fr.nav3;
    educationn.textContent = language.fr.nav4;
    skillss.textContent = language.fr.nav5;
    projectss.textContent = language.fr.nav6;
    resumee.textContent = language.fr.nav7;
    contactt.textContent = language.fr.nav8;
    
  } else if (window.location.hash == "#eng") {
    homee.textContent = language.eng.nav1;
    aboutt.textContent = language.eng.nav2;
    experiancee.textContent = language.eng.nav3;
    educationn.textContent = language.eng.nav4;
    skillss.textContent = language.eng.nav5;
    projectss.textContent = language.eng.nav6;
    resumee.textContent = language.eng.nav7;
    contactt.textContent = language.eng.nav8;
  }
}