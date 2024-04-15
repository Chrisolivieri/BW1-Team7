const stars= document.querySelectorAll(".stars i");
console.log(stars);


stars.forEach((star, index1) =>{

    star.addEventListener("click", () =>{
       

        stars.forEach((star,index2) => {
         index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });


});


function mostraAvviso() {
    alert("Thank you for touy rating!");
}




//collegamento pagina 

function navigaAPagina() {

    window.location.href = "index.html";
}

//invio valutazione
function navigaAPagina() {

    window.location.href = "grazie.html";
}

