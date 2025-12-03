
   
   const resetBtn = document.getElementById('reset-btn')
const buttons = document.querySelectorAll('button')
buttons.forEach(btn => btn.addEventListener('click', ()=>{
    
const add = parseInt(btn.getAttribute('data-plus'), 10) || 0
    
//   console.log(add)

const board = btn.closest('#score-board')

if(!board){
  console.warn('Button is not inside a score-board');
}


  const container = board.querySelector('.score-area .score-value');
  console.log(container)
  if(!container)return
//   console.log(container.textContent)
  
  container.textContent = (parseInt(container.textContent, 10) || 0) + add
   
}))


resetBtn.addEventListener('click', ()=>{
    const scoreValues = document.querySelectorAll('.score-value')
    scoreValues.forEach(sv => sv.textContent = '0')
})