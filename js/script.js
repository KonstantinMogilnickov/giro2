const callForm = document.getElementById('callForm');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalButton2');
const openModalBtn = document.getElementById('openModalButton2');

// document.getElementById("openModalButton").addEventListener("click", function() {
//     document.getElementById("myModal").style.display = "block";
// });

// document.getElementById("closeModalButton").addEventListener("click", function() {
//     document.getElementById("myModal").style.display = "none";
// });

const menuButton = document.querySelector('.m-menu');
menuButton.addEventListener('click', () =>{
    menu.classList.toggle("is-open")
});



openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

callForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneInput = document.getElementById('phone');
    console.log('Телефон для заказа звонка: ' + phoneInput.value);
    modal.style.display = 'none';
});

