const navSlide= () => {
    const burgermenu = document.querySelector('.burgermenu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    

    burgermenu.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');

         //animtion links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
        }
        console.log(index);
    });
    //burgeranimation
    burgermenu.classList.toggle('toggle');
    });
   
}

navSlide();
    
        
        