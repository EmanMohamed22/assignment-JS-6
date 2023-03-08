
import {  Booster} from "./module.js";
let booster = new Booster();
export class Category{
    constructor(){
   
    
    this.category = document.querySelectorAll(".links a")
    $(this.category).click((e)=>{
        console.log(e.target.id)
         this.fetchApi(e.target.id)
 
          
    })
}
    async fetchApi(category){
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '541bc83293msha30c2ee4cea9d84p1a7a02jsn7cd1136901e0',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const response = await api.json()
        booster.display(response)
        
       
}


    }