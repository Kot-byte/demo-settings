
function openItem(evt, itemName) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(itemName).style.display = "block";
  evt.currentTarget.className += " active";

  var btnFooter = document.querySelector('.btn-footer');
  var additionalInfo = document.querySelector('.additional-info');

  if (itemName === 'locations') {
    btnFooter.classList.add('hidden');
    additionalInfo.classList.remove('hidden');
  } else if (itemName === 'settings') {
    btnFooter.classList.remove('hidden');
    additionalInfo.classList.add('hidden');
  }
}

document.getElementById("defaultOpen").click();

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn'); 
const closeModalBtn = document.querySelector('.close-btn');

if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

const editLabel = document.querySelector('.edit-label');
const modalred = document.getElementById('modalred');
const closeBtnRed = document.querySelector('.close-btnred');

if (editLabel) {
  editLabel.addEventListener('click', function () {
    modalred.style.display = 'block';
  });
}

if (closeBtnRed) {
  closeBtnRed.addEventListener('click', function () {
    modalred.style.display = 'none';
  });
}

window.addEventListener('click', function (event) {
  if (event.target == modalred) {
    modalred.style.display = 'none';
  }
});

