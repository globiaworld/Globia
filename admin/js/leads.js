```javascript
async function saveLead(){

const company=document.getElementById("company").value;
const website=document.getElementById("website").value;
const email=document.getElementById("email").value;
const industry=document.getElementById("industry").value;
const country=document.getElementById("country").value;

const {error}=await supabase
.from("leads")
.insert([{

company,
website,
email,
industry,
country

}]);

if(error){

alert(error.message);
return;

}

loadLeads();

}

async function loadLeads(){

const {data,error}=await supabase
.from("leads")
.select("*")
.order("id",{ascending:false});

if(error){

console.log(error);
return;

}

const body=document.getElementById("tableBody");

body.innerHTML="";

data.forEach(row=>{

body.innerHTML+=`

<tr>

<td>${row.company}</td>

<td>${row.email}</td>

<td>${row.industry}</td>

<td>${row.ai_score}</td>

</tr>

`;

});

}

loadLeads();
```

