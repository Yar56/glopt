window.addEventListener('DOMContentLoaded', () => {
    const navigation = document.querySelector('.navigation'),
    navigationItem = document.querySelectorAll('.navigation__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        navigation.classList.toggle('navigation_active');
    });

    navigationItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            navigation.classList.toggle('navigation_active');
        })
    })
})