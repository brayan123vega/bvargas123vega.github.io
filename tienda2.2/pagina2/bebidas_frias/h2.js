const drinks = document.querySelectorAll('.drink');
const drinkDescription = document.getElementById('drinkDescription');

drinks.forEach(drink => {
    drink.addEventListener('click', () => {
        const description = drink.getAttribute('data-description');
        drinkDescription.textContent = `Descripción: ${description}`;
        drinkDescription.style.display = 'block';
    });
});
