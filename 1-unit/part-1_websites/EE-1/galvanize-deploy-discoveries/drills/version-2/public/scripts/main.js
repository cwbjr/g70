let who = document.getElementById('who')
let what = document.getElementById('what')
let how = document.getElementById('how')
let allJumbos = document.getElementsByClassName('jumbotron')

who.addEventListener('click', (e) => {
  clearJumbos()
  let jWho = document.getElementById('jumboWho')
  jWho.style.display = 'block'
})

what.addEventListener('click', (e) => {
  clearJumbos()
  let jWhat = document.getElementById('jumboWhat')
  jWhat.style.display = 'block'
})

how.addEventListener('click', (e) => {
  clearJumbos()
  let jHow = document.getElementById('jumboHow')
  jHow.style.display = 'block'
})

let clearJumbos = () => {
  for (let i = 0; i < allJumbos.length; i++) {
    allJumbos[i].style.display = 'none'
  }
}
