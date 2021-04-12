class PhotoGallery{
	constructor(){
		this.API_KEY = '563492ad6f91700001000001860cb3a938a1469f84be05b15365d283';
		this.gallery = document.querySelector('.gallery');
		this.searchForm = document.querySelector('form');
		this.loadMore = document.querySelector('.load-more');
		this.searchTerm = '';
		this.logo = document.querySelector('.logo');
		this.pageNo = 1;
		this.eventHandle();
	}
	eventHandle(){
		document.addEventListener('DOMContentLoaded',()=>{this.getImg()});
		this.searchForm.addEventListener('submit',(e)=>{
			this.pageNo = 1;
			this.getSearchImage(e)})
		this.loadMore.addEventListener('click',(e)=>{
			this.loadMoreImg(e);
		})
		this.logo.addEventListener('click',()=>{
			this.pageNo= 1;
			this.loadMore.setAttribute('data-img','curated')
			this.gallery.innerHTML=""
			this.getImg()
		})
	}
	async getImg(){
		this.loadMore.setAttribute('data-img',"curated")
		const baseUrl = `https://api.pexels.com/v1/curated?page=1per_page=15`;
		const data = await this.fetchImg(baseUrl);
		this.generateHtml(data.photos);
	}
	async fetchImg(url){
		return await fetch(url,{method:"GET",headers:{Accept: 'application/json',Authorization:this.API_KEY,}
		}).then(data => data.json())
	}
	generateHtml(photos){
		photos.forEach(data => {
			const item = document.createElement('div');
			item.setAttribute('class','item');
			item.innerHTML = `<a href=${data.src.original} target='_blank'><img src=${data.src.medium}><h3>${data.photographer}</h3></a>`;
			this.gallery.appendChild(item);
		})
	}
	async getSearchImage(e){
		e.preventDefault();
		this.loadMore.setAttribute('data-img',"searched")
		this.gallery.innerHTML = '';
		const searchValue = this.searchForm.querySelector('input').value;
		this.searchTerm = searchValue;
		const searchUrl =  `https://api.pexels.com/v1/search/?page=1&per_page=15&query=${this.searchTerm}`
		const data = await this.fetchImg(searchUrl);
		this.generateHtml(data.photos);
		e.target.reset();
	}
	async loadMoreImg(e){
		this.pageNo+=1;
		console.log(this.pageNo)
		if(e.target.dataset.img === 'curated'){
			const baseUrl = `https://api.pexels.com/v1/curated?page=${this.pageNo}per_page=15`;
			const data = await this.fetchImg(baseUrl);
			this.generateHtml(data.photos);
		}else {
			const baseUrl = `https://api.pexels.com/v1/search/?page=${this.pageNo}&per_page=15&query=${this.searchTerm}`
			const data = await this.fetchImg(baseUrl);
			this.generateHtml(data.photos);
		}
		
	}


}

const x = new PhotoGallery;

