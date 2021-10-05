//////nav bar toggle///////////
const iconEl = document.querySelector(".navbar-toggler");
const navbarEl = document.querySelector(".navbar-collapse");

iconEl.addEventListener("click",function(){
    console.log("click");
    navbarEl.classList.toggle("show");
});

//////up aero////////
const upSecEl = document.querySelector(".open-up");
const upToEl = document.querySelector(".btn-aero");

const  obs = new IntersectionObserver(
    function(entries){
        const ent = entries[0];

        if (ent.isIntersecting == false) {
            upToEl.classList.add("move");
        }
    
        if (ent.isIntersecting == true) {
            upToEl.classList.remove("move");
        }
    },
    {
    //In the vie port
    root:null, ///where did element should be appiaring or not
    threshold: 0  ,  /// out side the hero section, 1 means conplete hero section.
    rootMargin: "-80px"
    })
    obs.observe(upSecEl);

upToEl.addEventListener("click",function(e){
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth",
     })
});