
   
   const resetBtn = document.getElementById('reset-btn')

resetBtn.addEventListener('click', ()=>{
    const scoreValues = document.querySelectorAll('.score-value')
    scoreValues.forEach(sv => sv.textContent = '0')
})

const buttons = document.querySelectorAll('button')
buttons.forEach(btn => btn.addEventListener('click', ()=>{
    
  // find the data-plus attribute value
const add = parseInt(btn.getAttribute('data-plus'), 10) || 0
    
//   console.log(add)

// find the closest score-board ancestor
const board = btn.closest('#score-board')

if(!board){
  console.warn('Button is not inside a score-board');
}


  const container = board.querySelector('.score-area .score-value');
  // console.log(container)
  if(!container)return
//   console.log(container.textContent)
  
  container.textContent = (parseInt(container.textContent, 10) || 0) + add
   
}))


