function nextPage(n){

for(let i=1;i<=4;i++){
document.getElementById("page"+i).style.display="none";
}

document.getElementById("page"+n).style.display="block";

}



document.addEventListener("mousemove",()=>{

let h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

document.body.appendChild(h);

setTimeout(()=>h.remove(),4000);

});



document.addEventListener("DOMContentLoaded",()=>{

let no=document.getElementById("no");

no.addEventListener("mouseover",()=>{

no.style.top=Math.random()*400+"px";
no.style.left=Math.random()*400+"px";

});

});



function playSong(){

document.getElementById("music").play();
  }
