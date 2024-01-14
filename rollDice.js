const roleDice=document.querySelector('.role')
const hold=document.querySelector('.hold');
const newGame=document.querySelector('.new_game');
const  perma=document.querySelector('.p_score');
const  perm2=document.querySelector('.p_score2');
const  score=document.querySelector('.c_score');
const  score2=document.querySelector('.c_score2');
const dies=document.querySelectorAll('.all_p');
const result1={
  temp:0,
  perm:0,

}
const result2={
  temp:0,
  perm:0,

}
newGame.addEventListener('click' , function(){
result1.temp=0;
result2.temp=0;
result1.perm=0;
result2.perm=0;
perma.innerHTML=0;
perm2.innerHTML=0;
score.innerHTML=0;
score2.innerHTML=0;
for(let i=0;i<dies.length;i++){
  dies[i].style.display="none";}
})
let x=Math.random();
let test=true;
  if(x>0.5){
  document.querySelector('.blur1').classList.remove('bl1');
  test=false;
  time(2);

  
  
  
}
else{
  document.querySelector('.blur2').classList.remove('bl2');
  test=true;
  time(1);
  

}
function time(n){
    setTimeout(() => {
    document.querySelector('.information').style.display='block';
    document.querySelector('.info_info').innerHTML=`player ${n} Turn`;
    
   }, 1);
   setTimeout(() => {
    
    document.querySelector('.information').style.display='none';
    
   }, 1000);
   }

            roleDice.addEventListener('click',function (){
  
              if(result1.perm>=100){
                alert('Player 1 win please start  new game');

              }
               else if(result2.perm>=100){
                alert('Player 2 win please start game');

              }
              else{
  if(test){

  person1();
 
}
else{
  person2();



}}});


   

  function person1(){
 
    if(test){
    document.querySelector('.blur1').classList.add('bl1');
  document.querySelector('.blur2').classList.remove('bl2');
  
  for(let i=0;i<dies.length;i++){
  dies[i].style.display="none";}
  let random=Math.trunc(Math.random()*6)+1;
  console.log(random);
    for(let i=0;i<random;i++){
    dies[i].style.display='inline';
    }
    result1.temp = Number(result1.temp) + random;
if(random===1){
result1.temp=0;
score.innerHTML=result1.temp;

test=false;
document.querySelector('.blur1').classList.remove('bl1');
document.querySelector('.blur2').classList.add('bl2');
time(2);


}
score.innerHTML=result1.temp;








  

  
    }
    if(result1.perm>=100){
                alert('player1 win please start new game');

              }
               else if(result2.perm>=100){
                alert('player2 win please start new game');

              }}

function person2()
{ 

if(test===false){
  
  document.querySelector('.blur1').classList.remove('bl1');
  document.querySelector('.blur2').classList.add('bl2');
 
  for(let i=0;i<dies.length;i++){
  dies[i].style.display="none";}
  let random=Math.trunc(Math.random()*6)+1;
  console.log(random);
    for(let i=0;i<random;i++){
    dies[i].style.display='inline';
    }
    result2.temp = Number(result2.temp) + random;
if(random===1){
result2.temp=0;
score2.innerHTML=result2.temp;

test=true;

document.querySelector('.blur2').classList.remove('bl2');
document.querySelector('.blur1').classList.add('bl1');
time(1);


}
score2.innerHTML=result2.temp;



  

  


}
if(result1.perm>=100){
                alert('Player 1 win please start new game');

              }
               else if(result2.perm>=100){
                alert('Player 2 win please start new game');

              }}
hold.addEventListener('click', function () {
  if (test===true) {
    hold1();
  function hold1(){
    console.log('player hold')

  for(let i=0;i<dies.length;i++){
  dies[i].style.display="none";}
  
  hold.disabled = true;

    result1.perm = Number(result1.perm) + result1.temp;
    if (result1.temp !== 0) {
     
        perma.innerHTML = result1.perm;
        result1.temp = 0;
        score.innerHTML = result1.temp;
        test = false;
        document.querySelector('.blur1').classList.remove('bl1');
        document.querySelector('.blur2').classList.add('bl2');
        time(2);

    }
        setTimeout(() => {
            hold.disabled = false;
        }, 1000);
    
   
}
}
else if(test===false){ 
  hold2();
function hold2(){
console.log('player2 hold')


hold.disabled=true;
for(let i=0;i<dies.length;i++){
  dies[i].style.display="none";}
result2.perm= Number(result2.perm)+result2.temp;
console.log(result2.temp);
if(result2.temp!==0){

perm2.innerHTML=result2.perm;
result2.temp=0;
score2.innerHTML=result2.temp;
test=true;
document.querySelector('.blur2').classList.remove('bl2');
document.querySelector('.blur1').classList.add('bl1');
time(1);


}

setTimeout(() => {
            hold.disabled = false;
        }, 1000);

}

}
}) 
