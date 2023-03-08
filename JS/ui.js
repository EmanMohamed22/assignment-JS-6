

export class Detail{
    constructor(){
        this.cartona = document.querySelectorAll(".cartona")
        $(this.cartona).click((e)=>{  
        $("#games").fadeOut(300,()=>{
            $(".loading").css("display","flex").fadeIn(500)
            $(".loading").fadeOut(500,()=>{
                $("#details").fadeIn(300)})
            })
            this.fetchapi(e.target.id)
        })
          this.close = document.querySelector(".close")      
          $(this.close).click(()=>{
            $("#details").fadeOut(200,()=>{
                $("#games").fadeIn(200) 
            })
          })
        
    }
    async fetchapi(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '541bc83293msha30c2ee4cea9d84p1a7a02jsn7cd1136901e0',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
       let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let response = await api.json()
    this.displayDetails(response)
    }
    displayDetails(response){
        let datadetail = `
        <div class="col-md-4">
        <img src="${response.thumbnail}" alt="">
    </div>
    <div class="col-md-8">
        <h3 class="text-white"> Title : <span class="fs-4 text-white">${response.title}</span></h3>
        <h5 class="text-white">Categry: <span class="bg-info rounded-2 fs-6 p-1 text-dark">${response.genre}</span></h5>
        <h5 class="text-white">Platform: <span class="bg-info rounded-2 fs-6 p-1 text-dark">${response.platform}</span></h5>
        <h5 class="text-white">Status: <span class="bg-info rounded-2 fs-6 p-1 text-dark">${response.status}</span></h5>
        <p class="text-white mt-3"> ${response.description}</p>
        <a class="btn btn-outline-warning text-white" href="${response.game_url}">Show Game</a>
    </div>
        `
        document.getElementById("detailsContent").innerHTML = datadetail
       }
}