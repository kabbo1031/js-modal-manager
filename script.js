let activeModal = null;

function openModal(id){
  closeModal();
  activeModal = document.getElementById(id);
  document.getElementById('overlay').style.display = 'block';
  activeModal.style.display = 'block';
}

function closeModal(){
  document.getElementById('overlay').style.display = 'none';
  if(activeModal){
    activeModal.style.display = 'none';
    activeModal = null;
  }
}
