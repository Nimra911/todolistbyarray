const form = document.getElementById("formData");
console.log(form);
const inputField = document.getElementById("input");
console.log(inputField);
const taskValues = [] ;
const addBtn = document.getElementById("addBtn");
console.log(addBtn);
const saveBtn = document.getElementById("saveBtn");
console.log(saveBtn);

var editPress = false;
let index;

addBtn.addEventListener('click', function(e)
{if(inputField.value!='')
    { 
    taskValues.push(inputField.value);
    inputField.value='';
    console.log("taskValue"+taskValues);
    print();
}
}
);

function print()
{
    console.log("taskValue in print"+taskValues);
    const ul = document.getElementById("list");
    ul.innerHTML ='';
    taskValues.forEach(function(n,i)
    {
        if(n!=-'')
        {

     
        console.log(i);
        ul.innerHTML += `<li class='items'> ${n}
        <div class="spanButton">
            <span><i class="fa fa-edit" onclick = "editList(${i})">

                </i></span>
            <span>

                <i class="fa fa-remove" onclick = "deleteList(${i})">

                </i>
            </span>
        </div>
    </li>`;
}
    }
    );
    console.log(taskValues);
}
// console.log()
function deleteList(i)
{

taskValues.splice(i,1);
print();
}
function editList(i)
{ index = i;
    editPress=true;
    var check = taskValues[i];
    console.log('edit list value'+check);
    inputField.value = check;
  
    
 
}
function EditSave()
{
  if(editPress===true)
  {

    if(inputField.value!='')
    {
    console.log(taskValues.splice(index,1,inputField.value));

    console.log(taskValues);

print();

}
inputField.value =" ";

}
editPress=false;
}

