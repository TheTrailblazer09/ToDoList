  let addButton = document.getElementById('submit');

  let addItem= document.getElementById('new');
// add close button
let counter=0;
document.querySelector('#submit').onclick= ()=>{
  let list= document.getElementById('list');
  list.innerHTML += `<div id="item-${counter}"> 
  <span id="name">
    ${addItem.value}
  </span>
  <button id="edit"> Edit </button>
  <button id="delete" onlick= > Delete</button>
  </div>
  `
  counter++;
  let deleteBtns= document.querySelectorAll("#delete");
  for(let i=0;i<deleteBtns.length;i++){
    deleteBtns[i].onclick= ()=>{
      this.parentNode.remove();
    }
  }
}



// li.setAttribute = whatever and then grab reference and delete item from list
//li.remove