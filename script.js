const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

function  generatejoke() {
    const config ={
        headers:{
            Accept:"application/json",
        },
    };
    fetch (" https://icanhazdadjoke.com",config)
    .then((res)=>{
        return res.json();
    })
    .then((date)=> {
        jokeEl.innerHTML = date.joke;
    })
    .catch((err) =>{
        console.log(err);
    });
    
}
generatejoke(); 
jokeBtn.addEventListener("click",generatejoke);