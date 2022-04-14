
let wordList=["Italy", "Albania","France","Iran","China","Cuba", "Bulgaria","Argentina","Russia","Sweden","Austria","Germany",  "Egypt","Qatar"];
let ran1=wordList[Math.floor(Math.random()*wordList.length)]
console.log(ran1)



for(let i=0;i<wordList.length;i++){
  console.log(wordList[i])
}


let output =document.getElementById('output1')
let html ="<ul>"
for(let i=0;i<wordList.length;i++){
html+= "<li>"+ wordList[i] +"</li>"
}
html+="</ul>"
output.innerHTML=html


let buttn=document.getElementById("button2") 
buttn.addEventListener("click",() => {
  let user=document.getElementById("userInput").value

    if(ran1.includes(user)){
      document.getElementById("Y").innerHTML="It is included in the wordlist";
      }else{
        document.getElementById("N").innerHTML="It is not included in the wordlist";
  }
//This method only applies on the randomized word , but does not apply on the total wordlist which i created
//Another point is that, this does not apply on the capilasied word, it only applies on the method ran1
})

buttn.addEventListener("click",() => {
  let user=document.getElementById("userInput").value
let num=0;

 for(let i=0;i<=wordList.length;i++){
 
 if(ran1.charAt(i).match(user))
num++;
 }
 document.getElementById("numCount").innerHTML=num
})

function GetCountry(){
let test1=ran1.toUpperCase();
let test2=ran1.toLowerCase();
count=1;

for(let i=0;i<ran1.length-1;i++){
count++;
}


let count1=0;
for(i=0;i<ran1.length;i++){
  if(ran1.charAt(i).match(/[aeiouAEIOU]/)) {
    count1++;
  }
}

document.getElementById("output2").innerHTML=ran1
document.getElementById("output3").innerHTML=test1
document.getElementById("output4").innerHTML=test2
document.getElementById("output5").innerHTML=count
document.getElementById("output6").innerHTML=count1

}











