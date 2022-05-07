// let footer = getElementsByClassName('logoSocial');
// for(let i=0; i<footer.length; i++);{
//     footer[i].addEventListener('mouseover',()=>{
//         footer[i].style.color='#FFFF00';
//     });
// }
// navbar effet hover
const menus = document.querySelectorAll('.navbar a'); 
for(let i = 0; i < menus.length; i++) { 
    menus[i].addEventListener('mouseover', function () { 
       let active = document.querySelector('.navbar .active');

        if(menus[i].classList.contains('active')) { 
            return false;
        }
       
        active.classList.remove('active');
       
        menus[i].classList.add('active');
    })

    menus[i].addEventListener('click', function () {
        let active = document.querySelector('.navbar .active');
 
         if(menus[i].classList.contains('active')) { 
             return false;
         }
        
         active.classList.remove('active');
         
         menus[i].classList.add('active');
     })
 
}

//icone verticale a droite

const media = document.querySelector('.media');
window.addEventListener('scroll', function (e) {
  
  if(window.scrollY == "300") {
        media.style.position = 'fixed';//fixe au milieu
        media.style.right = '3.6%'
        media.style.bottom = '4%'
  } 
})

//effet sur toute les titres

const ratio = .4;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio 
  }
  
  const fadeIn = function (entries, observer) {
      entries.forEach(function (entry) {
          if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
          } 
      }) 
  }

  const observer = new IntersectionObserver(fadeIn, options);
  document.querySelectorAll('h1').forEach(function(r) {
    observer.observe(r);
  });


  //effet fondu du site
  
  const fonduOpacity = function (entries, observer2) {
      entries.forEach(function (entry) {
          if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('fondu-visible');
                observer2.unobserve(entry.target);
          } 
      }) 
  }

  const observer2 = new IntersectionObserver(fonduOpacity, options);
  document.querySelectorAll('.fondu').forEach(function(r) {
    observer2.observe(r);
  });

  //effet image

  const zoomImage = function (entries, observer3) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
              entry.target.classList.add('zoom-visible');
              observer3.unobserve(entry.target);
        } 
    }) 
}

const observer3 = new IntersectionObserver(zoomImage, options);
document.querySelectorAll('.zoom').forEach(function(r) {
  observer3.observe(r);
});


//slider dans la partie nemesis
const bA = document.getElementsByTagName('iframe');

const imgSlide = document.querySelectorAll('.multimedia .none');
const nbSlide = imgSlide.length;
const precedent = document.querySelector('.précédent');
const suivant = document.querySelector('.suivant');
let count = 0;
let srcs = ["https://www.youtube.com/embed/jXrFsn9pcZY",
            "https://www.youtube.com/embed/UMgb3hQCb08", 
            "https://www.youtube.com/embed/OiqPQ7L_C00"
           ]

function slideSuivant () {
    imgSlide[count].classList.remove('none-active');

    if(count < nbSlide - 1) {
        count++;
    } else {
        count = 0
    }

    imgSlide[count].classList.add('none-active');
    bA[0].src = srcs[count];
}

suivant.addEventListener('click', slideSuivant);

function slidePrécédent () {
    imgSlide[count].classList.remove('none-active');

    if(count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    imgSlide[count].classList.add('none-active');
    bA[0].src = srcs[count];
}

precedent.addEventListener('click', slidePrécédent);

//affichage du pop up lorsque le formulaire a été envoyé

const confirm = document.querySelector('.confirm');
const popUp = document.querySelector('.pop-up');
const inputs = document.querySelectorAll('input.fondu, select.fondu');
const email = inputs[0];
const checkbox = inputs[1];
const select = inputs[2];
const news = inputs[3];
const message = inputs[4]; 

let erreur;
confirm.addEventListener('click', function (e) {
    e.preventDefault();

    if(!email.value) {
        erreur = 'Veuillez entrez votre mail';
    }
    if(!news.value) {
        erreur = 'Veuillez entrez votre votre choix';
    }
    if(!checkbox.checked) {
        erreur = 'Veillez cochez le checkbox';
    }
    if(!message.value) {
        erreur = 'Veuillez entrez un message';
    }
    if(erreur) {
        document.getElementById('erreur').innerHTML = erreur;
    } else {
        //on affiche le popUp

        popUp.classList.add('popUp-reveal');

    }
    
});
