

// When the user clicks anywhere outside of the modal, close it
/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */

function memberBioModal(id, name){
  // Get the modal
  modal = document.getElementById(id);

  bioFile = "/files/board-member-bios/" + name + ".txt";
   
  readSingleFile(modal, bioFile);
}

function readSingleFile(m, f) {
    
    /* var res; */
    fetch(f)
   .then(response => response.text())
   .then((response) => {
    console.log(response);
        let memBio = document.getElementById(m.id).querySelector('p');
        /* console.log("id after = " + id + " member bio text " + response); */
        //memBio.style.backgroundColor = "blue";
       /*  memSelector.style.backgroundColor = "green";*/
       
        memBio.innerHTML = response;
        
        /* document.getElementById('bio').style.transition = "all 2s"; */
        m.style.display = "block";
        
        console.log("eased in-out");
   })
   .catch(err => console.log(err))
}

function closeModal(id){
  document.getElementById(id).style.display = "none";
}



