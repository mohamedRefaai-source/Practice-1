const plansCards = document.querySelectorAll(".price-card");
plansCards.forEach((card) => {
  card.addEventListener("click", () => {
    plansCards.forEach((c) => {
      if (c.classList.contains("highlight")) {
        c.classList.toggle("highlight");
      }
    });
    card.classList.toggle("highlight");
  });
});

function toggleHighlight(clientsCard) {
  clientsCards.forEach((c) => {
    if (c.classList.contains("highlight-client-card")) {
      c.classList.remove("highlight-client-card");
    }
  });
  clientsCard.classList.add("highlight-client-card");
}
const clientsCards = document.querySelectorAll(".client-card");

clientsCards.forEach((clientsCard) => {
  clientsCard.addEventListener("mouseover", () => toggleHighlight(clientsCard));
});

// const headerButtons = document.querySelector(".pricing-button");
// const dropList = document.querySelector(".drop-down-list");
// headerButtons.addEventListener("click", () => {
//   dropList.classList.toggle("show");
// });

const headerButtons = document.querySelectorAll(".drop-down-button");

headerButtons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.children[0].classList.add("show");
  });
  btn.addEventListener("mouseout", () => {
    btn.children[0].classList.remove("show");
  });
});
