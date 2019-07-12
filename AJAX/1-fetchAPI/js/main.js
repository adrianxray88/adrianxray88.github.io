// console.log("działa");
fetch('https://jsonplaceholder.typicode.com/posts/1');
    .then(response =>response.json())
    .then(response=>{
        let paragraf = document.createElement('p');
        paragraf.innerText = response.title;
        document.body.appendChild(paragraf);

        console.log(response.title);
    });