//step 1 create img array
let cardarray=[
    {
        'name' :'s',
        'img':'https://cdn-icons-png.flaticon.com/128/3137/3137044.png'
    },
    {
        'name' :'t',
        'img':'https://cdn-icons-png.flaticon.com/128/135/135620.png'
    },
    {
        'name' :'j',
        'img':'https://cdn-icons-png.flaticon.com/128/2909/2909808.png'
    },
    {
        'name' :'u',
        'img':'https://cdn-icons-png.flaticon.com/128/590/590772.png'
    },
    {
        'name' :'b',
        'img':'https://cdn-icons-png.flaticon.com/128/10848/10848880.png'
    },
    {
        'name' :'i',
        'img':'https://cdn-icons-png.flaticon.com/128/6866/6866562.png'
    }

];
//step 2  to duplicate Each Card
const gamecard=cardarray.concat(cardarray);
console.log(gamecard)
 // steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.

//  const myNumbers = (array) => {
//          for (let i = array.length - 1; i > 0; i--) {
//              let j = Math.floor(Math.random() * (i + 1))
//              //console.log(i, j)
//              let temp = array[i]
//              array[i] = array[j]
//              array[j] = temp
//          }
//          return array
//      }
    
   // const shuffledChild = myNumbers(gamecard)
    let shuffledChild = Array.from(gamecard).sort(() => 0.5 - Math.random());
    // console.log("shuffledChild:"+shuffledChild)

//step 4
var parentdiv=document.querySelector('#cardsection');
let clickcount=0;
let firstcard="";
let secondcard="";
const cardmatch=() =>{
    let cardselected = document.querySelectorAll('.cardselected');

    cardselected.forEach((curElem) => {
        curElem.classList.add('cardmatch')
    })
}
const resetgame = () => {
    firstcard = "";
    secondcard = "";
    clickcount = 0;

    let cardselected = document.querySelectorAll('.cardselected');

    cardselected.forEach((curElem) => {
        curElem.classList.remove('cardselected')
    })

}
parentdiv.addEventListener('click',(event) =>
{
let curcard=event.target;
clickcount++;
if(clickcount<3){
if(clickcount===1){
    firstcard=curcard.parentNode.dataset.name;
    curcard.parentNode.classList.add("cardselected");
}
else{
    secondcard=curcard.parentNode.dataset.name;
    curcard.parentNode.classList.add("cardselected");
}
if(firstcard !== "" && secondcard !== ""){
    if(firstcard === secondcard ){
        // curcard.classList.add('cardmatch')
        setTimeout(()=>{
            cardmatch();
            resetgame();
        },1000)
        
    }
    else{
        setTimeout(()=>{
            resetgame();
        },1000)
    }
}
}
if(curcard.id === "cardsection"){return false}

})

// ************ //

for(let i=0;i<shuffledChild.length;i++){

    const childdiv=document.createElement('div')
    childdiv.classList.add('card')

    childdiv.dataset.name=shuffledChild[i].name;

    const frontdiv = document.createElement('div');
    frontdiv.classList.add('frontcard')

    const backdiv = document.createElement('div');
    backdiv.classList.add('backcard')
    backdiv.style.background=`url(${shuffledChild[i].img})`;

    // childdiv.style.background=`url(${shuffledChild[i].img})`;
    parentdiv.appendChild(childdiv);
    childdiv.appendChild(frontdiv)
    childdiv.appendChild(backdiv)
}