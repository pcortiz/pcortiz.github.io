function reelSize(){
  /* Current Implementation is Only Designed for One Project Showcase */
  const reel = document.getElementById("reel");
  const projbox = document.getElementById("projbox");
  let mount = Math.ceil((reel.clientHeight / projbox.offsetWidth)/2);
  if (mount > 0){
  let newgroup = document.createElement("div");
  newgroup.className = "projgroup";
  
  for(let j = 0;j < mount; j++){
    let clone = projbox.cloneNode(true);
    newgroup.appendChild(clone);
  }
 while(reel.hasChildNodes()){
    reel.removeChild(reel.firstChild);
  }
  
  for(let k = 0; k < 2; k++){
    let groupclone = newgroup.cloneNode(true);
    reel.appendChild(groupclone);
  }
 }
}
/*----------------Navigation Bar interactivity----------------*/
//Add active class to the current button (highlight it)
let header = document.getElementById("header");
let btns = header.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}