let nav =document.querySelector('.nav_links');
let hamburg= document.querySelector('.hamburg')
let cerrar= document.querySelector('.cerrar')


hamburg.addEventListener('click',()=> {
    hamburg.style.display= 'none';
    nav.style.display= 'block';
    cerrar.style.display= 'block';  
});

// Boton cerrar del nav
cerrar.addEventListener('click',()=>{
    hamburg.style.display= 'block';
    nav.style.display= 'none';
    cerrar.style.display= 'none';  
})
