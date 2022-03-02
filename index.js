console.log("Welcome to notes app");
showDisplay();
let addBtn=document.getElementById("addBtn");

addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt"); 
  let notes=localStorage.getItem("notes")
  if(notes==null){
      noteObj=[];
  }
  else{
      noteObj=JSON.parse(notes);
  }
  noteObj.push(addTxt.value);
  localStorage.setItem("notes",JSON.stringify(noteObj));
  addTxt.value="";
  console.log(noteObj);
  showDisplay();
})
function showDisplay(){
    let notes=localStorage.getItem("notes")
  if(notes==null){
      noteObj=[];
  }
  else{
      noteObj=JSON.parse(notes);
  }
    let html="";
    noteObj.forEach(function(element,index) {
        html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
               <div class="card-body">
               <h5 class="card-title">Note ${index+1}</h5>
               <p class="card-text">${element}</p>
               <button id="${index}" onclick="deletenote(this.id)"class="btn btn-primary">Delete Note</button>
               </div>
               </div>`;

        
        
    });
    let notesElem=document.getElementById('notes');
    if(noteObj.length!=0)
        notesElem.innerHTML=html;
        else{
            notesElem.innerHTML=`Nothing to add "use Add a Note"to add NOTES`
        }
    
}
//to delete note
function deletenote(index){
  let notes=localStorage.getItem("notes")
  if(notes==null){
      noteObj=[];
  }
  else{
      noteObj=JSON.parse(notes);
  }
  noteObj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(noteObj));
  showDisplay();
}
//for searching
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    //console.log("i have searched",search.value);
    let inputVal=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        //console.log(noteTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })


})

