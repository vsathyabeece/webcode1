var div = document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.classList.add("btn","btn-primary");
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let beweries = document.createElement("div");
beweries.setAttribute=("id","beweries");



div.append(input,button,beweries);
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    console.log(res);
    try{
    let url=`https://api.openbrewerydb.org/v1/breweries/${res}`;
    
    let res1=await fetch(url);
    let res2=await res1.json();
     beweries.innerHTML=`<p>Name of breweries : ${res2.name} </p>
     <span>Type of beweries : ${res2.brewery_type}</span>
     <p>Address : ${res2.address_1},${res2.address_2},${res2.address_3}</p>
     <p>website url : ${res2.website_url}</p>
     <p>The phone no of the brewery : ${res2.phone}</p>`;
    }
    catch(error){
        console.log(error);
    }

}


