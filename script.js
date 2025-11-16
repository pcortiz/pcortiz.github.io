/**
 * This Functions maintains the Project Reel on the Home Page
 * @Listens onLoad and onResize
 */
function reelSize(){
  // reel: determines size, projbox: what goes inside the reel
  const reel = document.getElementById("reel");
  const projbox = document.getElementById("projbox");
  // amount of projboxes needed to fill the project reel
  let amount = Math.ceil((reel.clientHeight / projbox.offsetWidth)/2);
  
  // checks if 0 in the case of the mobile website
  if (amount > 0){
    // creating a div to group all projboxes
    let newgroup = document.createElement("div");
    newgroup.className = "projgroup";
    
    // adding the amount of projboxes needed
    for(let j = 0;j < amount; j++){
      let clone = projbox.cloneNode(true);
      newgroup.appendChild(clone);
    }

    // remove all previous nodes to prevent excess elements
    while(reel.hasChildNodes()){
      reel.removeChild(reel.firstChild);
    }
    
    // duplicates group as needed for the reel animation property
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