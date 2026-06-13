```javascript
async function login(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const { error } =
await supabase.auth.signInWithPassword({

email,

password

});

if(error){

document.getElementById("status").innerHTML =
error.message;

return;

}

window.location =
"dashboard.html";

}
```

