let  generateBtn= document.getElementById('generate-btn');
let copyBtn = document.getElementById('copy-btn');
let generatedPassword=document.getElementById('generated-password');

generateBtn.onclick = () =>{
    let length = document.getElementById('length').value;
    let lowercase =document.getElementById('lowercase').checked;
    let uppercase = document.getElementById('uppercase').checked;
    let number = document.getElementById('number').checked;
    let symbol = document.getElementById('symbol').checked;


let charSet='';

if (lowercase){
    charSet += 'abcdefghijklmnopqrstuvwxyz';
}

if (uppercase){
    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}
if (number){
    charSet += '0123456789';
}
if(symbol){
    charSet += '!@#$%^&*?/][{})(\|';
}

if(!charSet){
    alert('please select at least one charactertype.');
}


let password='';
for (var i =0; i<length; i++){
    let randomIndex = Math.floor(Math.random()*charSet.length);
    password +=charSet[randomIndex];

}

generatedPassword.textContent = password;
copyBtn.style.display='block';
}

copyBtn.onclick=()=>{
    let copy=generatedPassword.textContent;
    navigator.clipboard.writeText(copy)
    .then(()=>{
       alert('password copied to clipboard');
        })
        .catch(error=>{
            alert('failed to copy password:'+error);
    })
}
