const shareButton = document.querySelectorAll(".share-button");
const shareContainer = document.querySelector(".share-container");
let opacity = shareContainer.style.opacity;

shareButton.forEach(element => {
  element.addEventListener("click", () => {
    opacity === 1 ? (opacity = 0) : (opacity = 1);
    shareContainer.style.opacity = opacity;
  });
});
