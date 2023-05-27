async function fetchData(url){
    const response = await fetch(url);
    const jsonData = await response.json()
    return jsonData    
}


let displayCosmic = document.querySelector(".displayCosmic");

let cosmics = [];

async function searchCosmic (){    
    let search = document.querySelector(".search").value;

    let response =  await fetchData(`https://www.omdbapi.com/?apikey=6663c708&s=${search}`);
    console.log(response);

    cosmics = response?.Search;

    let movie = response?.Search;
    movie.map(({Poster : movieposter,Title : movietitle,Year},index)=>{
        let div=document.createElement("div");
        div.setAttribute("class", "card")
    
        let Poster = document.createElement("img");
        Poster.setAttribute("src", movieposter);   
        Poster.style.width = "100px";
        Poster.style.height = "100px";
            
        let Title = document.createElement("div");
        Title.innerText = movietitle;
        Title.style.fontSize = "22px";
    
        let Writer = document.createElement("div");
        Writer.innerText = Year;
        Writer.style.fontSize = "20px";
    
        // let Director = document.createElement("div");
        // Director.innerText = response.Director;
    
        // let Released = document.createElement("div");
        // Released.innerText = response.Released;

        div.setAttribute("onclick", `displaymoviedetails(${index})`);
    
    
        div.append(Poster,Title,Writer);
        displayCosmic.append(div);
    })    
}


