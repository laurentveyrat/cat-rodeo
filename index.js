
// Get the modal

/*

var modal = document.getElementById("myModal");

var photos = document.getElementById("myPhotos");

photos.addEventListener("click", event => {
  if (event.target.tagName === "IMG") {
    // console.log("click sur une image");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementById("myImg");
    var img = event.target;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
  }
});
*/


/*

var videos = document.getElementById("myVideos");

videos.addEventListener("click", event => {
  if (event.target.tagName === "IMG") {
    // console.log("click sur une video");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementById("myImg");
    var img = event.target;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
  }
});

*/






/* Checkbox et bouton Submit */

const messageErreurCheckboxNonCocher = document.getElementById("mce-error-response-checkbox");
const messageErreurMailNonValide = document.getElementById("mce-error-response-mail");
const messageSucces = document.getElementById("mce-success-response");

const myCheck = document.getElementById("myCheckbox");
const inputEmail = document.getElementById("mce-EMAIL");
const divInputMail = document.getElementById("mc-field-group");

// const buttonSubmit = document.getElementById("mc-embedded-subscribe");
// buttonSubmit.addEventListener("click", e => {
//   e.preventDefault();
//   if (myCheck.checked) {
//     messageSucces.style.display = "inline";
//   }
//   else {
//     messageErreur.style.display = "inline";
//     e.stopPropagation();
//   }
// });

function afficheMessageSucces() {
  divInputMail.classList.add("success");
  messageSucces.style.display = "inline";
  setTimeout(() => {
    messageSucces.style.display = "none";
    divInputMail.classList.remove("success");
  }, 20000);
}

function afficheMessageErreur(errorType) {
  divInputMail.classList.add("error");
  const messageErreur = ((errorType === "mailNonValide") ? messageErreurMailNonValide : messageErreurCheckboxNonCocher);
  messageErreur.style.display = "inline";
  setTimeout(() => {
    messageErreur.style.display = "none";
    divInputMail.classList.remove("error");

  }, 10000);
}


function envoiForm(event) {
  const mail = inputEmail.value;
  const emailReg =  /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;

  if (myCheck.checked && emailReg.test(mail)) {
    afficheMessageSucces();
  }
  else {
    myCheck.checked ? afficheMessageErreur("mailNonValide") : afficheMessageErreur("checkboxNonCocher");
    event.preventDefault();
  }
}

const formFollow = document.getElementById("mc-embedded-subscribe-form");
formFollow.addEventListener("submit", envoiForm, false);




/* Menu responsive */

const menuHamburger = document.getElementById("menu-hamburger");
const menuClose = document.getElementById("menu-close");
const menuFixe = document.getElementById("menu-fixe");
const logo = document.getElementById("logo-nav");

const menuVertical = document.getElementById("menu-vertical");

function menuResponsive() {
  if(menuFixe.className === "myMenu-fixe") {
    menuFixe.className += " responsive";
    menuVertical.className += " responsive";
    menuHamburger.className = 'disabled';
    menuClose.className = 'active';
    logo.className = 'logo disabled';
  } else {
    menuFixe.className = "myMenu-fixe";
    menuVertical.className = "menu-flex";
    menuHamburger.className = 'active';
    menuClose.className = 'disabled';
    logo.className = 'logo active';
  }
}




// Animation boutons lors du clic

// const buttonTicket = document.getElementById("buttonTicket");

// buttonTicket.addEventListener("click", (e) => {  
  
//   const eventButtonTicket = e.currentTarget;
//   console.log(eventButtonTicket);
//   eventButtonTicket.classList.add('animated', 'bounce');
//   setTimeout(function(eventButtonTicket) {
//     console.log(eventButtonTicket);
//     eventButtonTicket.classList.remove('animated', 'bounce');
//   }, 2000);
// });




