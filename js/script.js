// SCROLL REVEAL

const cards = document.querySelectorAll(
'.card, .about-text, .about-image, .gallery img, .stat-box'
);

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform =
            "translateY(0)";
        }

    });

});


// NAVBAR EFFECT

const navbar =
document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.background =
        'rgba(0,0,0,0.85)';

        navbar.style.boxShadow =
        '0 15px 35px rgba(0,0,0,0.4)';
    }

    else{

        navbar.style.background =
        'rgba(255,255,255,0.08)';

        navbar.style.boxShadow =
        'none';
    }

});


// COUNTER ANIMATION

const counters =
document.querySelectorAll('.stat-box h2');

const speed = 200;

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute('data-count');

        const current =
        +counter.innerText;

        const increment =
        target / speed;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,15);

        } else {

            counter.innerText =
            target + '+';

        }

    };

    updateCounter();

});


// KEEP VIDEO PLAYING

const heroVideo =
document.querySelector('.hero-video');

if(heroVideo){

heroVideo.addEventListener(
'ended',
()=>{

heroVideo.play();

});

document.addEventListener(
'visibilitychange',
()=>{

if(!document.hidden){

heroVideo.play();

}

});

}


// MOUSE GLOW

document.addEventListener(
'mousemove',
(e)=>{

document.documentElement
.style.setProperty(
'--x',
e.clientX + 'px'
);

document.documentElement
.style.setProperty(
'--y',
e.clientY + 'px'
);

});


// MAGNETIC BUTTONS

const buttons =
document.querySelectorAll(
'.primary-btn, .secondary-btn'
);

buttons.forEach(button=>{

button.addEventListener(
'mousemove',
(e)=>{

const rect =
button.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const moveX =
(x - rect.width/2)/8;

const moveY =
(y - rect.height/2)/8;

button.style.transform =
`translate(${moveX}px,
${moveY}px) scale(1.05)`;

});

button.addEventListener(
'mouseleave',
()=>{

button.style.transform =
'translate(0,0) scale(1)';

});

});


// HERO PARALLAX

const hero =
document.querySelector('.hero');

document.addEventListener(
'mousemove',
(e)=>{

if(hero){

const x =
(e.clientX/window.innerWidth
-0.5)*20;

const y =
(e.clientY/window.innerHeight
-0.5)*20;

hero.style.backgroundPosition =
`${50+x}% ${50+y}%`;

}

});


// LOADER

window.addEventListener(
'load',
()=>{

const loader =
document.querySelector('.loader');

setTimeout(()=>{

loader.style.opacity = "0";

setTimeout(()=>{

loader.style.display='none';

},1000);

},1500);

});


// SCROLL PROGRESS

window.addEventListener(
'scroll',
()=>{

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop/scrollHeight)*100;

document.querySelector(
'.progress-bar'
).style.width =
progress + '%';

});


// BOOKING MODAL

const modal =
document.querySelector('.modal');

const openBtn =
document.querySelector('.open-modal');

const closeBtn =
document.querySelector('.close-modal');



const contactBtn =
document.getElementById('contactBtn');

if(contactBtn){

    contactBtn.addEventListener('click',()=>{

        modal.classList.add('active');

    });

}




if(openBtn){

openBtn.addEventListener(
'click',
()=>{

modal.classList.add('active');

});

}

if(closeBtn){

closeBtn.addEventListener(
'click',
()=>{

modal.classList.remove(
'active'
);

});

}



// CINEMATIC SCROLL REVEAL

const reveals =
document.querySelectorAll(
'.reveal, .reveal-left, .reveal-right'
);

window.addEventListener(
'scroll',
()=>{

reveals.forEach(reveal=>{

const top =
reveal.getBoundingClientRect().top;

if(top < window.innerHeight - 120){

reveal.classList.add(
'active'
);

}

});

});

// PREMIUM CARD TILT

const cardsTilt =
document.querySelectorAll(
'.card'
);

cardsTilt.forEach(card=>{

card.addEventListener(
'mousemove',
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
((y / rect.height)-0.5)
* -12;

const rotateY =
((x / rect.width)-0.5)
* 12;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener(
'mouseleave',
()=>{

card.style.transform =
`perspective(1000px)
rotateX(0deg)
rotateY(0deg)
scale(1)`;

});

});

// CURSOR GLOW

const glow =
document.querySelector(
'.cursor-glow'
);





document.addEventListener(
'mousemove',
(e)=>{

glow.style.left =
e.clientX + 'px';

glow.style.top =
e.clientY + 'px';

});


emailjs.init(
'n_SIyGllYJVFL8jMi'
);




const submitBtn =
document.querySelector('#submitBooking');

if(submitBtn){

submitBtn.addEventListener(
'click',
function(e){

e.preventDefault();

const name =
document.querySelector('#name').value;

const email =
document.querySelector('#email').value;

const event =
document.querySelector('#event').value;

const message =
document.querySelector('#message').value;

if(
!name ||
!email ||
!event
){

alert(
'Please fill all required fields.'
);

return;
}



const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
    alert("Enter a valid email.");
    return;
}





emailjs.send(
'service_32mjpii',
'template_4tvoqol',
{
name:name,
email:email,
event:event,
message:message
}
)

.then(()=>{

alert(
'Booking Request Sent Successfully!'
);

document.querySelector(
'#name'
).value='';

document.querySelector(
'#email'
).value='';

document.querySelector(
'#event'
).value='';

document.querySelector(
'#message'
).value='';

})

.catch((error)=>{

console.error(error);

alert(
'Failed to send booking request.'
);

});

});

}






document.querySelector('.secondary-btn')
.addEventListener('click',()=>{

document.querySelector('#about')
.scrollIntoView({
    behavior:'smooth'
});

});






/*
document
.getElementById('submitBooking')
.addEventListener(
'click',
function(){

const name =
document.getElementById('name').value;

const email =
document.getElementById('email').value;

const eventType =
document.getElementById('event').value;

const message =
document.getElementById('message').value;

emailjs.send(
'service_32mjpii',
'template_4tvoqol',
{
name:name,
email:email,
title:eventType,
message:message
}
)

.then(()=>{

alert(
'Booking Request Sent Successfully!'
);

})

.catch((error)=>{

console.log(error);

alert(
'Failed to Send'
);

});

});

*/