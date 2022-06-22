var nike_button = document.getElementById("nike_button");

nike_button.addEventListener("mouseover", () => {
    nike_button.style.color = 'black';
    nike_button.style.backgroundColor = 'grey';
    nike_button.style.borderRadius = 2 + 'vmin';
    nike_button.style.cursor = 'pointer';
});

nike_button.addEventListener("mouseout", () => {
    nike_button.style.color = 'white';
    nike_button.style.backgroundColor = '#363739';
    nike_button.style.borderRadius = 0;
    nike_button.style.cursor = 'default';
});