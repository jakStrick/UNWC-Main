
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
    //console.log(response);

      let mBio = document.getElementById("bio");
      /* mBio.style.backgroundColor = "white";
      mBio = document.getElementById("m-content");
      mBio.style.backgroundColor = "white"; */

      mBio.innerHTML = response;
     
      m.style.display = "block";
   })
   .catch(err => console.log(err))
}

function closeModal(id){
  document.getElementById(id).style.display = "none";
}



