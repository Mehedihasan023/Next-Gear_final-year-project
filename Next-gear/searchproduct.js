
const search= document.getElementById("search");
const matchList=document.getElementById("match-list");
const eachProduct = document.getElementById("product");
const searchStates = async searchText=>{
const res= await fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/af5b576a-9d0d-41a5-8fd1-40683b9a3e51');
const states = await res.json();
let matches=states.filter(state=>{

    const regex = new RegExp(`^${searchText}`,'gi');
    return state.model.match(regex);
});
if(searchText.length===0){
    matches=[];
    matchList.innerHTML=" ";
}
console.log(matches);
outPutHtml(matches);
};
const outPutHtml = matches => {
    // displaySearchResult(matches);
 if(matches.length >0){

const html= matches.map(match=>`
           <div class="card1" >
            <div>
            <img src="${match.image}" class="product-img" alt="">
            
          
             <h3 > ${match.id} </h3>
         
            </div>
          
            <button onclick="show('${match.key}')"id="details-btn">View details & Compare price</button>
          
            </div>

`)
.join('');

matchList.innerHTML=html;
}
};
search. addEventListener('input', ()=>searchStates(search.value));

const show=(element1)=> {
   
    const detail = document.getElementById("detail-info");
    
       fetch('https://api.jsonstorage.net/v1/json/bae46076-c643-4faf-a2c2-71000cfc3217/af5b576a-9d0d-41a5-8fd1-40683b9a3e51')
      .then(Response => Response.json())
      .then(data => show1(data))
       
        const show1 =(element2)=>{
            const result = element2.find( ({ key }) => key === element1 );

            console.log(result)
           

            // let matches=element2.find(state=>{
        
            //     const regex = new RegExp(`^${element1}`,'');
            //     return state.model.match(regex);
            // });

        // console.log(matches);
        const match = result;
        const div = document.createElement("div");
        div.innerHTML = `
<div class="detail-card" >
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
       </div>
     
     </div>
    <div class="prices" > 
        <h3><span> Website Link with prices</span></h3>
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link1}">${match.productdetails.Links_price?.platform1||''} </a>: ${match.productdetails.Links_price?.Price1}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link2}">${match.productdetails.Links_price?.platform2||''} </a>: ${match.productdetails.Links_price?.Price2}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link3}">${match.productdetails.Links_price?.platform3||''} </a>: ${match.productdetails.Links_price?.Price3}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link4}">${match.productdetails.Links_price?.platform4||''} </a>: ${match.productdetails.Links_price?.Price4}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link5}">${match.productdetails.Links_price?.platform5||''} </a>: ${match.productdetails.Links_price?.Price5}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link6}">${match.productdetails.Links_price?.Platform6||''} </a>: ${match.productdetails.Links_price?.Price6}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link7}">${match.productdetails.Links_price?.Platform7||''} </a>: ${match.productdetails.Links_price?.Price7}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price.Link8}">${match.productdetails.Links_price?.Platform8||''} </a>: ${match.productdetails.Links_price?.Price8}    Tk</h4> 
        <h4><a target="_blank" href="${match.productdetails.Links_price?.Link9}">${match.productdetails.Links_price?.Platform9||''} </a>: ${match.productdetails.Links_price?.Price9||''}    Tk</h4> 
        <a href="product.html"><button id="details-btn">Back to Product list</button> </a>
       
    </div>
</div>
`;
detail.appendChild(div);

    }
    document.getElementById("match-list").style.display="none";
    document.getElementById("search1").style.display="none";
    document.getElementById("product").style.display="none";
}

