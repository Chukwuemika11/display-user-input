document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const displayBtn = document.getElementById('displayBtn');
    const userInfo = document.getElementById('userInfo');
    const displayedName = document.getElementById('displayedName');
    const displayedEmail = document.getElementById('displayedEmail');
    const displayedAge = document.getElementById('displayedAge');

    displayBtn.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;

        displayedName.textContent = name;
        displayedEmail.textContent = email;
        displayedAge.textContent = age;

        userInfo.classList.remove('hidden');
    });
});