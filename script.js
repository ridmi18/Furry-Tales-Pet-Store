const categorySelect = document.getElementById('pet-category');
const ageSelect = document.getElementById('pet-age');
const petContainer = document.querySelector('.pets-container');


categorySelect.addEventListener('change', filterPets);
ageSelect.addEventListener('change', filterPets);


function filterPets() {
    const selectedCategory = categorySelect.value;
    const selectedAge = ageSelect.value;

    const petItems = petContainer.querySelectorAll('.pet-item');

    petItems.forEach((petItem) => {
        const petCategory = petItem.dataset.category;
        const petAge = petItem.dataset.age;

    if (selectedCategory === 'all' || selectedCategory === petCategory) {
        if (selectedAge === 'all' || selectedAge === petAge) {
            petItem.style.display = 'block';
        } else {
            petItem.style.display = 'none';
        }
    } else {
        petItem.style.display = 'none';
    }
    });
}

function scheduleAppointment() {
    alert('Thank you for scheduling an appointment. We will contact you soon!');
}

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Form submitted successfully!');
        return true;
    } else {
        alert('Please fill in all fields.');
        return false;
    }
}

document.getElementById('contact-form').onsubmit = function() {
    return validateForm();
};


function toggleMenu() {
    var menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
}
