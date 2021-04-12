const name = document.querySelectorAll(".name span");
console.log(wrapper);
function handleHover(e) {
  const color = e.srcElement.dataset.color;
  document.body.style.backgroundColor = color;
}
name.forEach((item) => {
  item.addEventListener("mouseover", handleHover);
  item.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = "#fcf6ea";
  });
});


//============= scroll fix ==========
const navlist = document.querySelector('.nav-list');

navlist.addEventListener('click',(e)=>{
	const link = e.target;
	if(link.classList.contains('nav-link')){
		if(link.dataset.id){
			const linkTo = link.dataset.id;
			const linkItem = document.querySelector(`#${linkTo}`);
			window.scrollTo(0,linkItem.offsetTop);
		}
	}
})


//============= popup ==========
const popup = document.querySelector('.popup');

document.querySelector('.mob-nav-btn').addEventListener('click',()=>{
	window.scrollTo(0,0);
	popup.classList.remove("hide")
})

popup.querySelector('button').addEventListener('click',()=>{
	popup.classList.add('hide')
})

popup.querySelector('.pop-list').addEventListener('click',(e)=>{
	if(e.target.classList.contains('nav-link')){
		if(e.target.dataset.id){
		const linkTo = e.target.dataset.id;
			const linkItem = document.querySelector(`#${linkTo}`);
			window.scrollTo(0,linkItem.offsetTop);
		}
	}
	popup.classList.add('hide');
})

//banner btns  fix
const bannerBtn = document.querySelector('.banner-buttons');
bannerBtn.addEventListener('click',(e)=>{
		if(e.target.dataset.id){
		const linkTo = e.target.dataset.id;
			const linkItem = document.querySelector(`#${linkTo}`);
			window.scrollTo(0,linkItem.offsetTop);
		}
	
	
})