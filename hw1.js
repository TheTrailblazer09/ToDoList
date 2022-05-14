  let addButton = document.getElementById('submit');

  let addItem= document.getElementById('new');
// add close button
let counter=0;
document.querySelector('#submit').addEventListener('click', (e)=>{
  e.preventDefault()
  let list= document.getElementById('list');
  if(addItem.value !== ''){
  list.innerHTML += `<div id="item-${counter}" class="col-2 m-2  justify-content-center"> 
    <div id="name" >
      ${addItem.value}
    </div>
    <button id="edit"> Edit </button>
    <button id="delete" onlick= > Delete</button>
  </div>
  `
  addItem.value = ''
  counter++;
  let deleteBtns= document.querySelectorAll("#delete");
  for(let i=0;i<deleteBtns.length;i++){
    deleteBtns[i].onclick= ()=>{
      this.parentNode.remove();
    }
  }
}
})



// li.setAttribute = whatever and then grab reference and delete item from list
//li.remove