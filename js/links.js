let links1 = document.querySelectorAll('.linkis1');
let links2 = document.querySelectorAll('.linkis2');
let links3 = document.querySelectorAll('.linkis3');
let links4 = document.querySelectorAll('.linkis4');

links1.forEach((element) =>{
    element.addEventListener("click", (e)=>{
        e.preventDefault();

        let xhr = new XMLHttpRequest;

        xhr.open("get", "./seo.html");

        xhr.addEventListener("load",()=>{
            let main = document.getElementById('probando');
            main.innerHTML = xhr.response;
                        
        })
        
        xhr.send();

    })
}
)

links2.forEach((element) =>{
    element.addEventListener("click", (e)=>{
        e.preventDefault();

        let xhr = new XMLHttpRequest;

        xhr.open("get", "./socialmedia.html");

        xhr.addEventListener("load",()=>{
            let main = document.getElementById('probando');
            main.innerHTML = xhr.response;
                        
        })
        
        xhr.send();

    })
}
)

links3.forEach((element) =>{
    element.addEventListener("click", (e)=>{
        e.preventDefault();

        let xhr = new XMLHttpRequest;

        xhr.open("get", "./googleads.html");

        xhr.addEventListener("load",()=>{
            let main = document.getElementById('probando');
            main.innerHTML = xhr.response;
                        
        })
        
        xhr.send();

    })
}
)

links4.forEach((element) =>{
    element.addEventListener("click", (e)=>{
        e.preventDefault();

        let xhr = new XMLHttpRequest;

        xhr.open("get", "./diseñoweb.html");

        xhr.addEventListener("load",()=>{
            let main = document.getElementById('probando');
            main.innerHTML = xhr.response;
                        
        })
        
        xhr.send();

    })
}
)