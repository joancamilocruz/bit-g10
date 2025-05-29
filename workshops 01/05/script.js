'use strict',

//const p1 = document.getElementById('p1');

fetch('file.json')
.then((res)=> res.json())
.then((info)=>{
    console.log(info);
    //p1.innerText = `<p>${info}</p>`
    //console<log(info[0<.student);<
for (let i = 0; i < i < info.length; i++) {
console.log(info[i].student);    
}
}).catch((err)=>{
    console.log('error', err);
})

