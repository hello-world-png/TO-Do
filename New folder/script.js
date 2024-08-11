const item = document.querySelector("#item");
const todo = document.querySelector("#todo");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
           addtodo(this.value)
           this.value ="";
        }
    }
)

const addtodo = (item) =>{
   const listitem = document.createElement("li");
   listitem.innerHTML = `
             ${item}
            <i class="fas fa-times"></i>
            `;


             listitem.addEventListener(
                "click",
                function(){
                    this.classList.toggle("done");

                }
             )
            todo.appendChild(listitem)
}