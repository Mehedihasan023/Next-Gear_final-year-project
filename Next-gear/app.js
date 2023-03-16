

fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/af5b576a-9d0d-41a5-8fd1-40683b9a3e51')
  .then(Response => Response.json())
  .then(data => displaySearchResult(data))

const displaySearchResult = (product1) =>{

    product1.forEach(element=>{
        
        const eachProduct = document.getElementById("product");
        const div = document.createElement('div');
        div.classList.add('col');
            div.innerHTML = `
           
        <div class="card" >
        
            <div> 
            <img src="${element.image}" class="product-img"alt="">
            </div>
            <div class="content">
            <h3 > ${element.model} </h3>
           <h4><span class="milage" >Mileage</span> : ${element.Mileage} </h4>
           <h4><span class="milage" >Engine</span> :${element.productdetails.EngineInfo.Engine_Type}</h4>
           
          
           </div>  
           <div class="button1">
           <button onclick="showDetails('${element.key}')" id="details-btn">View details & Compare price</button>
           </div>
           
        </div>
       
            `;
            eachProduct.appendChild(div);


    });

}


const showDetails=(element1)=> {
    // const result2 = element1.find( ( key ) => key === gsx-one );
    if(element1=='gsx-one'){
        const detail2 = document.getElementById("detail-info2").style.display="block";
        const detail3 = document.getElementById("detail-info").style.display="block";
    }
    else if(element1!=='gsx-one'){
        const detail2 = document.getElementById("detail-info2").style.display="none";
        const detail3 = document.getElementById("detail-info").style.display="none";
    }
   console.log(element1);
    const detail = document.getElementById("detail-info3");
    const detail2 = document.getElementById("detail-info2");
    const detail3 = document.getElementById("detail-info");
       fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/af5b576a-9d0d-41a5-8fd1-40683b9a3e51')
      .then(Response => Response.json())
      .then(data => show(data))

fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/e807d958-2f2c-4c63-a915-279a245343b1')
.then(Response => Response.json())
.then(data => show2(data))

fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/db5ca52f-e66a-44ba-9f17-f91bc991bd9e')
.then(Response => Response.json())
.then(data => show3(data))
       
        const show =(element2)=>{
            const result = element2.find( ({ key }) => key === element1 );

            console.log(result)
        const match = result;
        const div = document.createElement("div");
        div.innerHTML = `
<div class="detail-card" >
<button onclick="comparebikes('${match.key}')"  id="compare-btn">Compare Two Bikes</button>
    <div class="card2">
        <div> <img src="${match.image}" class="product-img2" alt=""> </div>
        <div class="card3">
         <h3 >Model: ${match.id} </h3>
         <h3>Engine Information:</h3>
         <h4>Engine: ${match.productdetails.EngineInfo.Engine_Type}</h4>
         <h4>Engine Displacement : ${match.productdetails.EngineInfo?.Displacementcm3}</h4>
        <h4>Engine Output :${match.productdetails.EngineInfo.Engine_Output}</h4>
        <h4>Engine Torque : ${match.productdetails.EngineInfo.Torque}</h4>
        <h4>No of Cylinders : ${match.productdetails.EngineInfo.No_of_Cylinders}</h4>
        <h4>Drive Type : ${match.productdetails.EngineInfo.Drive_Type}</h4>
        <h4>Starter System : ${match.productdetails.EngineInfo.Starter_System}</h4>
        <h4>Fuel System : ${match.productdetails.EngineInfo.Fuel_System}</h4>
        <h4>Transmission : ${match.productdetails.EngineInfo.Transmission}</h4>
        <h4>Gear Box: ${match.productdetails.EngineInfo.Gear_Box}</h4>
        <h4>Bore: ${match.productdetails.EngineInfo.Bore}</h4>
        <h4>Stroke: ${match.productdetails.EngineInfo.Stroke}</h4>
        <a href="product.html"><button id="details-btn">Back to Product list</button> </a>
       </div>
       
     </div>
    <div class="prices" > 
        <h3><span> Website Link with prices</span></h3>
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link1}">${match.productdetails.Links_price?.platform1||'No Website'} </a>: ${match.productdetails.Links_price?.Price1||'0'}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link2}">${match.productdetails.Links_price?.platform2||'No Website'} </a>: ${match.productdetails.Links_price?.Price2||'0'}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link3}">${match.productdetails.Links_price?.platform3||'No Website'} </a>: ${match.productdetails.Links_price?.Price3||'0'}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link4}">${match.productdetails.Links_price?.platform4||'No Website'} </a>: ${match.productdetails.Links_price?.Price4||'0'}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link5}">${match.productdetails.Links_price?.platform5||'No Website'} </a>: ${match.productdetails.Links_price?.Price5||'0'}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link6}">${match.productdetails.Links_price?.Platform6||'No Website'} </a>: ${match.productdetails.Links_price?.Price6||'0'}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link7}">${match.productdetails.Links_price?.Platform7||'No Website'} </a>: ${match.productdetails.Links_price?.Price7||'0'}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link8}">${match.productdetails.Links_price?.Platform8||'No Website'} </a>: ${match.productdetails.Links_price?.Price8||'0'}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price?.Link9}">${match.productdetails.Links_price?.Platform9||'No Website'} </a>: ${match.productdetails.Links_price?.Price9||'0'}    Tk</h4> 
       
    </div>
</div>
`;
    detail.appendChild(div);

}
const show2 =(element3)=>{
        element3.forEach(element3=>{
       
        console.log(element3)
    const div2 = document.createElement("div");
    div2.innerHTML = `
    <div >
    <h4 class="dynamic">Fetched price from Api </h4>
    <div class="prices1" > 
    <h4><a target="_blank" href="${element3.website_link}">${element3.website_name} </a>   :${element3.Price} TK
    <span class="${element3.availabe_status}"> ${element3.availabe_status} </span></h4> 
    </div>
</div>
    `;
    detail2.appendChild(div2);
});
}

const show3 =(element4)=>{
    element4.forEach(element4=>{
   
    console.log(element4)
const div3 = document.createElement("div");

div3.innerHTML = `
<div>
<div class="prices2" > 
<h4><a target="_blank" href="${element4.website_link}">${element4.website_name} </a>   :${element4.Price} TK
<span class="${element4.availabe_status}"> ${element4.availabe_status} </span></h4> 
   
</div>
</div>
`;
detail3.appendChild(div3);
});

}

    document.getElementById("match-list").style.display="none";
    document.getElementById("search1").style.display="none";
    document.getElementById("product").style.display="none";
}
const comparebikes=(bike)=> {
    // compare1(bike);
   fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/af5b576a-9d0d-41a5-8fd1-40683b9a3e51')
   .then(Response => Response.json())
//    .then(data => showBikes(data))

   fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/af5b576a-9d0d-41a5-8fd1-40683b9a3e51')
   .then(Response => Response.json())
   .then(data=> match1(data))

   const match1=(data1)=>{
    console.log(data1);
    const  findBike= data1.find( ({ key }) => key === bike );
    console.log(findBike.key);


    const index = data1.findIndex( (element) => element.key === bike );
    console.log(index);

    var ar = data1
    
    delete ar[index]; // delete element with index 4
    
    console.log( ar ); 

    // if(bike===findBike.key){
        
    // }
    showBikes(ar);
    compare3(bike);
document.getElementById("first-bike").style.display="none";
// document.getElementById("detail-info").style.display="none";
// document.getElementById("detail-info2").style.display="none";
   }
  
   
   const showBikes=(element)=>{
    element.forEach(element2=>{
    const eachProduct = document.getElementById("compare-bike");
    const div = document.createElement('div');
    div.classList.add('col');
        div.innerHTML = `
       
    <div class="card">
    
        <div><img src="${element2.image}" class="product-img"alt=""></div>
            <div class="content">
            <h3 > ${element2.model} </h3>
        <h4><span class="milage" >Mileage</span> : ${element2.Mileage} </h4>
        <h4><span class="milage" >Engine</span> :${element2.productdetails.EngineInfo.Engine_Type}</h4>
        <input class="check" type="checkbox" id="${element2.key}" onclick="myFunction('${element2.key}')"> 
        </div>  
        <div class="button1" >
        
        </div>
       
    </div>
   
        `;
        eachProduct.appendChild(div);

   });
}

}
// var a= 0;
// function check(data) {
//     document.getElementById(data).checked = true;
//     a+1;
//   }
  
//   function uncheck(data) {
//       a+1;
//     document.getElementById(data).checked = false;
   
//   }
  var key1=[];
const myFunction=(data)=>{
    if (key1!==data){
        key1.push(data);
    }else {
        key1.pop(data);
    }


if(key1.length==0){
    // var x = document.getElementById("myCheck").checked;
    // if(x==true ){
    //   key1.push(data);
    // }
    alert('want to select this items');
    document.getElementById(data).checked=true;
    document.getElementById(keyvalue).style.border="2px solid red";
}
if (key1.length==2 ){
   
    alert('are you sure ?');
    // delete key1[2];
    key1.pop();
    key1.pop(data);
   document.getElementById(data).checked=false;
//   key1.pop();
}
// if(key1.length==2){
//     key1.pop();
// }console.log(key1);
// if(key1.length==3){
//     alert('do you want to select?');
// key1.pop(data);
// document.getElementById(data).checked=true;
// }
console.log(key1);
//  var selected = key1;
if(key1==''){
alert('select an item');
}else{
    document.getElementById("not-selected").style.display="block";
    return key1;
   
    //  compare2(key1);
}

}
document.getElementById("not-selected").style.display="none";
// var selected1 = key1;
// var key2=[];
// const compare1=(data)=>{

// key2.push(data);
//     if(key1.length==2){
//         key1.pop();
//         key2.push(key1);
        
//     }
//     if(key2.length==3){
//         delete key2[2];
//         if(key2.length==3){
//             key2.pop();
//         }
//     }
    
//     console.log(key2);
 
// // document.getElementById(data).style.border="2px solid red";

//     // console.log(data);

document.getElementById("not-selected").addEventListener("click", function(event) {
    if(key1==''){
        alert('select a item');
    }else{
        compare2(key1);
    }
   
    event.preventDefault();
},);

document.getElementById("details-btn1").style.display="none";
// }
document.getElementById("first-bike").style.display="none";


const compare2=(data1)=>{
    document.getElementById("detail-info").style.display="none";
document.getElementById("detail-info2").style.display="none";
    document.getElementById("details-btn1").style.display="block";
    document.getElementById("not-selected").style.display="none";
    
    fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/af5b576a-9d0d-41a5-8fd1-40683b9a3e51')
    .then(Response => Response.json())
    .then(data => twobikes(data))

    let bike1= data1.pop();
//     data.forEach(element=>{
//       console.log(element);
//      let bike2=element;

//   return bike2;
      
//     });
    const comparision=document.getElementById("second-bike");
    const twobikes =(element2)=>{
        const result = element2.find( ({ key }) => key === bike1 );

        console.log(result)

        const match = result;
        const div = document.createElement("div");
        div.innerHTML = `
<div class="detail-card" >

    <div class="compare1">
        <div> <img src="${match.image}" class="product-img2" alt=""> </div>
        <div class="compare3">
         <h3 >Model: ${match.id} </h3>
         <h3>Engine Information:</h3>
         <h4>Engine: ${match.productdetails.EngineInfo.Engine_Type}</h4>
         <h4>Engine Displacement : ${match.productdetails.EngineInfo?.Displacementcm3}</h4>
        <h4>Engine Output :${match.productdetails.EngineInfo.Engine_Output}</h4>
        <h4>Engine Torque : ${match.productdetails.EngineInfo.Torque}</h4>
        <h4>No of Cylinders : ${match.productdetails.EngineInfo.No_of_Cylinders}</h4>
        <h4>Drive Type : ${match.productdetails.EngineInfo.Drive_Type}</h4>
        <h4>Starter System : ${match.productdetails.EngineInfo.Starter_System}</h4>
        <h4>Fuel System : ${match.productdetails.EngineInfo.Fuel_System}</h4>
        <h4>Transmission : ${match.productdetails.EngineInfo.Transmission}</h4>
        <h4>Gear Box: ${match.productdetails.EngineInfo.Gear_Box}</h4>
        <h4>Bore: ${match.productdetails.EngineInfo.Bore}</h4>
        <h4>Stroke: ${match.productdetails.EngineInfo.Stroke}</h4>
        
       </div>
       
     </div>
    <div class="prices3" > 
        <h3><span> Website Link with prices</span></h3>
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link1}">${match.productdetails.Links_price.platform1} </a>: ${match.productdetails.Links_price.Price1}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link2}">${match.productdetails.Links_price.platform2} </a>: ${match.productdetails.Links_price.Price2}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link3}">${match.productdetails.Links_price.platform3} </a>: ${match.productdetails.Links_price.Price3}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link4}">${match.productdetails.Links_price.platform4} </a>: ${match.productdetails.Links_price.Price4}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link5}">${match.productdetails.Links_price.platform5} </a>: ${match.productdetails.Links_price.Price5}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link6}">${match.productdetails.Links_price.Platform6} </a>: ${match.productdetails.Links_price.Price6}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link7}">${match.productdetails.Links_price.Platform7} </a>: ${match.productdetails.Links_price.Price7}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link8}">${match.productdetails.Links_price.Platform8} </a>: ${match.productdetails.Links_price.Price8}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price?.Link9}">${match.productdetails.Links_price?.Platform9||'No Website'} </a>: ${match.productdetails.Links_price?.Price9||'0'}    Tk</h4> 
       
    </div>
</div>
`;
    comparision.appendChild(div);

}
   document.getElementById("detail-info3").style.display="none";
    document.getElementById("compare-bike").style.display="none";
    document.getElementById("first-bike").style.display="block";

}

var compare3=(data2)=>{
   
console.log(data2);
fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/af5b576a-9d0d-41a5-8fd1-40683b9a3e51')
.then(Response => Response.json())
.then(data => first(data))

const firstbike=document.getElementById("first-bike");
const first =(element2)=>{
    const result2 = element2.find( ({ key }) => key === data2 );

    console.log(result2)
const match1 = result2;
const div = document.createElement("div");
div.innerHTML = `
<div class="detail-card" >
<div class="compare1">
<div> <img src="${match1.image}" class="product-img2" alt=""> </div>
<div class="compare3">
 <h3 >Model: ${match1.id} </h3>
 <h3>Engine Information:</h3>
 <h4>Engine: ${match1.productdetails.EngineInfo.Engine_Type}</h4>
 <h4>Engine Displacement : ${match1.productdetails.EngineInfo?.Displacementcm3}</h4>
<h4>Engine Output :${match1.productdetails.EngineInfo.Engine_Output}</h4>
<h4>Engine Torque : ${match1.productdetails.EngineInfo.Torque}</h4>
<h4>No of Cylinders : ${match1.productdetails.EngineInfo.No_of_Cylinders}</h4>
<h4>Drive Type : ${match1.productdetails.EngineInfo.Drive_Type}</h4>
<h4>Starter System : ${match1.productdetails.EngineInfo.Starter_System}</h4>
<h4>Fuel System : ${match1.productdetails.EngineInfo.Fuel_System}</h4>
<h4>Transmission : ${match1.productdetails.EngineInfo.Transmission}</h4>
<h4>Gear Box: ${match1.productdetails.EngineInfo.Gear_Box}</h4>
<h4>Bore: ${match1.productdetails.EngineInfo.Bore}</h4>
<h4>Stroke: ${match1.productdetails.EngineInfo.Stroke}</h4>
</div>

</div>
<div class="prices3" > 
<h3><span> Website Link with prices</span></h3>
<h4><a target="_blank" href="${match1.productdetails.Links_price.Link1}">${match1.productdetails.Links_price.platform1} </a>: ${match1.productdetails.Links_price.Price1}    Tk</h4> 
<h4><a target="_blank" href="${match1.productdetails.Links_price.Link2}">${match1.productdetails.Links_price.platform2} </a>: ${match1.productdetails.Links_price.Price2}    Tk</h4> 
<h4><a target="_blank" href="${match1.productdetails.Links_price.Link3}">${match1.productdetails.Links_price.platform3} </a>: ${match1.productdetails.Links_price.Price3}    Tk</h4> 
<h4><a target="_blank" href="${match1.productdetails.Links_price.Link4}">${match1.productdetails.Links_price.platform4} </a>: ${match1.productdetails.Links_price.Price4}    Tk</h4> 
<h4><a target="_blank" href="${match1.productdetails.Links_price.Link5}">${match1.productdetails.Links_price.platform5} </a>: ${match1.productdetails.Links_price.Price5}    Tk</h4> 
<h4><a target="_blank" href="${match1.productdetails.Links_price.Link6}">${match1.productdetails.Links_price.Platform6} </a>: ${match1.productdetails.Links_price.Price6}    Tk</h4> 
<h4><a target="_blank" href="${match1.productdetails.Links_price.Link7}">${match1.productdetails.Links_price.Platform7} </a>: ${match1.productdetails.Links_price.Price7}    Tk</h4> 
<h4><a target="_blank" href="${match1.productdetails.Links_price.Link8}">${match1.productdetails.Links_price.Platform8} </a>: ${match1.productdetails.Links_price.Price8}    Tk</h4> 
<h4><a target="_blank" href="${match1.productdetails.Links_price?.Link9}">${match1.productdetails.Links_price?.Platform9||'No Website'} </a>: ${match1.productdetails.Links_price?.Price9||'0'}    Tk</h4> 

</div>
</div>
`;
firstbike.appendChild(div);

}



document.getElementById("first-bike").style.display="block";


}