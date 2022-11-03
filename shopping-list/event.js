
let input1 = document.getElementById("list-input");

document.getElementById("list-btn").addEventListener("click",function(event){
//create div
    var newDiv = document.createElement('div');
    newDiv.id = "list-new-one";
    document.getElementById("parent-div").appendChild( newDiv);
    newDiv.style.display="flex";
    

//create cheakbox

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "cheak1";
    checkbox.style.position= "absolute";
    checkbox.style.marginRight = "-3%";
    checkbox.style.marginLeft= "1%";
    checkbox.style.marginTop= "1.7%";
    document.getElementById("list-new-one").appendChild(checkbox);
    checkbox.addEventListener('click', function (event) {
        if(newList.style.textDecoration=="line-through"){
        newList.style.textDecoration="none";
        } else{
            newList.style.textDecoration="line-through";
        }
      });
     

     
// creat paragraph
    let newList = document.createElement("p");
    newList.innerHTML = input1.value;
    input1.value = " ";
    document.getElementById("list-new-one").appendChild(newList);
    newList.style.backgroundColor="pink";
    newList.style.width = "100%";
    newList.style.marginLeft = "0";
    newList.style.padding = "1rem 4rem 1rem 2rem";
    newList.style.textAlign= "start";
    newList.style.margin= "0";
    newList.style.marginLeft= "1.0%";
    newList.id="Pargraph";
    

   
    
// create button
    let removeBtn = document.createElement('button');
    removeBtn.id = "list-remove";
    
    document.getElementById("list-new-one").appendChild(removeBtn);
    removeBtn.style.padding=" 3.5%";
    removeBtn.style.padding=" 5% 4% 0 5.9%";
    removeBtn.style.backgroundColor="#ff00ff";
    removeBtn.style.border="none";
    removeBtn.addEventListener('click', function (event) {
        newList.remove();
        checkbox.remove();
        removeBtn.remove();
      });
   
    })

    