
var admiNameInput=document.getElementById("adminName");
var emailInput=document.getElementById("email");
var adminJobInput=document.getElementById("job");
var inputs=document.querySelectorAll(".form-control");
var productsContainer ;

  if (localStorage.getItem("productList") !== null){
      productsContainer=[];
      productsContainer = JSON.parse(localStorage.getItem("productList"));
      displayInfo()

    }

function addInfo(){
    var product ={
        name:admiNameInput.value,
        email:emailInput.value,
        job:adminJobInput.value,
    }
    productsContainer.push(product);
    localStorage.setItem("productList" , JSON.stringify(productsContainer));
    
    clearForm()
    displayInfo()
  
}
function clearForm(){
    for(i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}

function displayInfo(){
    var productLis=``;
    var tbody =document.querySelector(".tableBody");
    for(var i=0 ; i<productsContainer.length;i++){
        productLis+=` <tr class="mt-4">

        
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].email}</td>
        <td>${productsContainer[i].job}</td>
        <td><img src='download.jfif' style='width:40px'; onclick='updateInfo(${i})'></td>
        <td><img src='delet.PNG' style='width:40px' background-color:'black'; onclick='deleteInfo(${i})'></td>`
        
    }
    tbody.innerHTML=productLis;

}

function searchInfo(term){   
    var productList =``;
    for (var i=0 ;i<productsContainer.length;i++){
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true){
            productList += `<tr>
            
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].email}</td>
            <td>${productsContainer[i].job}</td>
            <td><button onclick="updateInfo(${i})" class="btn btn-outline-dark">Update</button></td>
            <td><button onclick="deleteInfo(${i})" class="btn btn-outline-primary">Delete</button></td>
        </tr>`
        }
    }
    document.querySelector(".tableBody").innerHTML = productList;
}

function deleteInfo(index){
    productsContainer.splice(index , 1);
    localStorage.setItem("productList" , JSON.stringify(productsContainer));
    displayInfo();

}

function updateInfo(index){

    admiNameInput.value = productsContainer[index].name;
    emailInput.value = productsContainer[index].email;
     adminJobInput.value = productsContainer[index].job;
     updateIndex=index;
     document.getElementById("saveProduct").style.display="inline"
}

function saveEdit(){
    var saveEditProduct={
        name:admiNameInput.value,
        email:emailInput.value,
        job:adminJobInput.value,
    }
    productsContainer.splice(updateIndex,1,saveEditProduct);
    localStorage.setItem("productList" , JSON.stringify(productsContainer));
    clearForm()
    displayInfo()
    document.getElementById("saveProduct").style.display="none"

}