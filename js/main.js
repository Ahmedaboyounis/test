let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "come back here ❤️ ;( ";
} );
window.addEventListener("focus", () => {
    document.title = docTitle;
});

// nav
$('nav i , i ').click(function(){
    $('aside').toggleClass('open');

   
  })
// end nav

let a = document.querySelector(".button");
window.onscroll = function() {
    // follow
    if (window.scrollY >= follow.offsetTop - 500) {
      if (!started) {
        nums.forEach((counter) => start(counter));
      }
      started = true;
    }
    // top screen
    if (window.scrollY >= 1300) {
      a.classList.add("buttonshow");
    } else {
      a.classList.remove("buttonshow");
    }
  };
  
  a.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
     // follow
     let nums = document.querySelectorAll(".follow .counter");
     let follow = document.querySelector(".follow");
     let started = false;

     function start(el){
       let goal = el.dataset.goal;
       let count = setInterval(() => {
         el.textContent++;
         if (el.textContent == goal) {
           clearInterval(count);
         }
       }, 1900 / goal)
     }
     // end follow

