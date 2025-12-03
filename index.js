
   
   
const buttons = document.querySelectorAll('button')
buttons.forEach(btn => btn.addEventListener('click', ()=>{
    
const add = parseInt(btn.getAttribute('data-plus'), 10) || 0
    
//   console.log(add)
  const container = btn.closest('#score-board').querySelector('.score-area .score-value');
  
  if(!container)return
//   console.log(container.textContent)
  
  container.textContent = (parseInt(container.textContent, 10) || 0) + add
   
}))


