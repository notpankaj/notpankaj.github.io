const name = document.querySelectorAll(".name span");
const wrapper = document.querySelector("#wrapper");
console.log(wrapper);
function handleHover(e) {
  const color = e.srcElement.dataset.color;
  wrapper.style.backgroundColor = color;
}
name.forEach((item) => {
  item.addEventListener("mouseover", handleHover);
  item.addEventListener("mouseleave", () => {
    wrapper.style.backgroundColor = "#fcf6ea";
  });
});
