import { Detail } from "./ui.js";
let detail = new Detail();



export class Booster{
    constructor(){   
        this.load = document.querySelector(".loading")
        $(this.load).css("display","flex").fadeIn(500)
        $(this.load).fadeOut(500,()=>{
            this.fetchApi()
        })
           
    }
   async fetchApi(){
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '541bc83293msha30c2ee4cea9d84p1a7a02jsn7cd1136901e0',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?`, options)
        const response = await api.json()

       let result = this.display(response)
       
       
        
    }
    display(response){
        let game = "";
        for (let i = 0; i < response.length; i++) {
            game += ` 
            <div class="col-md-3   ">
            <div class="box border border-1 border-dark rounded-2  text-white position-relative ">
            <div class="layer2 position-absolute" id=${response[i].id}></div>
            <div class="p-3  ">
            <img src="${response[i].thumbnail}" alt="" id="coverPhoto" class ="w-100">
            <div class="d-flex justify-content-between pt-2">
             <h6 id="playname">${response[i].title}</h6>
             <button class="btn btn-light">free</button>
         
            </div>
            <div class ="same h-100 overflow-hidden">
            <p id="playtext" class="text-center ">${response[i].short_description}</p>
            </div>
            
        </div>
       
       
       <div class="d-flex justify-content-between align-items-center border border-top border-dark p-1">
        <h6>${response[i].genre}</h6>
        <h6>${response[i].platform}</h6>
       </div>
       </div>
       </div>
            `
            
        }
        document.querySelector(".cartona").innerHTML = game
    }
    
 }
