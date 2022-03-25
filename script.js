const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

//Search
// const search = document.querySelector('.search')
// const input = document.querySelector('.input')
// const btn = document.querySelector('.search-button')

// btn.addEventListener('click', ()=>{
//     search.classList.toggle('active')
//     input.focus()
// })