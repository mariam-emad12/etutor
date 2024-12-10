
const cards = document.querySelectorAll(".my-card");

cards.forEach(card => {
    const cart = card.querySelector(".cart");

    card.addEventListener("mouseover", () => {
        cart.style.display = "block";
        cart.style.opacity = "1";
        cart.style.transform = "translateY(0)";
    });

    card.addEventListener("mouseleave", () => {
        cart.style.opacity = "0";
        cart.style.transform = "translateY(20px)";
        setTimeout(() => {
            cart.style.display = "none";
        }, 300); // Match this timeout with your CSS transition duration
    });
});
