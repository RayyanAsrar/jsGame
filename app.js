    window.addEventListener('keydown',function(event){
        console.log(event.keyCode);
        
    })
// // let input= document.getElementById('input-field')
// // input.addEventListener("keypress",function(event){
// // if (event.keyCode==13){
// //     console.log(input.value)
// // }
// // })
// let getakuma=document.getElementById("getakuma")
// let leftPosition=50    
// window.addEventListener("keydown",function(event){
// if(event.keyCode==68){
// getakuma.src="https://www.fightersgeneration.com/characters/akuma-wkf.gif"
// leftPosition+=20
// getakuma.style.left=`${leftPosition}px`
// } 
// else {
//     window.addEventListener("keyup",function(){
//         getakuma.src="https://www.fightersgeneration.com/characters/akuma-ts-stance.gif"
//     })
// }
// if(event.keyCode==65){
//     getakuma.src="https://www.fightersgeneration.com/characters/akuma-wkf.gif"
//     leftPosition-=20
//     getakuma.style.left=`${leftPosition}px`}
// else {
//     window.addEventListener("keyup",function(){
//         getakuma.src="https://www.fightersgeneration.com/characters/akuma-ts-stance.gif"
//     })
// }


// })
// // window.addEventListener("keypress",function(event){
// //     if(event.keyCode==88){
// //           getakuma.src="https://www.fightersgeneration.com/characters/akumahado.gif"
// //         }
// // })
// let getakuma = document.getElementById("getakuma");
// let getryu = document.getElementById("getryu");
// let akumaPosition = 50;
// let ryuPosition = 1300;

// window.addEventListener("keydown", function(event) {
    
//     if (event.keyCode == 68 && akumaPosition<1300) {  
//         getakuma.src = "https://www.fightersgeneration.com/characters/akuma-wkf.gif";
//         akumaPosition += 20;
//         getakuma.style.left = `${akumaPosition}px`;
//     } else if (event.keyCode == 65 && akumaPosition>0) { 
//         getakuma.src = "https://www.fightersgeneration.com/characters/akuma-wkf.gif";
//         akumaPosition -= 20;
//         getakuma.style.left = `${akumaPosition}px`;
//     } 
    
// });
// window.addEventListener("keydown", function(event) {
//     if (event.keyCode == 88) {  
//         getakuma.src = "https://www.fightersgeneration.com/characters/sf-akuma.gif";
//         setTimeout(function(){
//             getakuma.src = "https://www.fightersgeneration.com/characters/akuma-ts-stance.gif";
//         }, 4000);  
//     } else if(event.keyCode == 87){
//         getakuma.src = "https://www.fightersgeneration.com/characters/aku-jump2.gif";
//         setTimeout(function(){
//             getakuma.src = "https://www.fightersgeneration.com/characters/akuma-ts-stance.gif";
//         }, 1000);  
//     }
// });
// window.addEventListener("keyup", function(event) {
//     if (event.keyCode !== 88 && event.keyCode !==87) {  
//         getakuma.src = "https://www.fightersgeneration.com/characters/akuma-ts-stance.gif";
//     }
// });


// window.addEventListener("keydown", function(event) {
    
//     if (event.keyCode == 39  && ryuPosition<1300) {  
//         getryu.src = "https://www.fightersgeneration.com/characters3/ryu-walkf.gif";
//         ryuPosition += 20;
//         getryu.style.left = `${ryuPosition}px`;
//     } else if (event.keyCode == 37  && ryuPosition>0) { 
//         getryu.src = "https://www.fightersgeneration.com/characters3/ryu-walkf.gif";
//         ryuPosition -= 20;
//         getryu.style.left = `${ryuPosition}px`;
//     } 
    
// });
// window.addEventListener("keydown", function(event) {
//     if (event.keyCode == 76) {  
//         getryu.src = "https://www.fightersgeneration.com/characters3/ryu-hadoken11.gif";
//         setTimeout(function(){
//             getryu.src = "https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif";
//         }, 2000);  
//     } else if(event.keyCode == 38){
//         getryu.src = "https://www.fightersgeneration.com/characters3/ryu-shoryukens.gif";
//         setTimeout(function(){
//             getryu.src = "https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif";
//         }, 1000);  
//     }
// });
// window.addEventListener("keyup", function(event) {
//     if (event.keyCode !== 88 && event.keyCode !== 87) {
//         getakuma.src = "https://www.fightersgeneration.com/characters/akuma-ts-stance.gif";
//     }
//     if (event.keyCode !== 76 && event.keyCode !== 38) {
//         getryu.src = "https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif";
//     }
// });

let getakuma = document.getElementById("getakuma");
let getryu = document.getElementById("getryu");
let akumaPosition = 50;
let ryuPosition = 1300;
function showCard() {
    document.getElementById("controlCard").style.display = "block";
}

function hideCard() {
    document.getElementById("controlCard").style.display = "none";
}
function changeCharacterImage(character, newSrc) {
    character.src = newSrc;
    character.style.width = "220px";  
    character.style.height = "300px"; 
    character.style.objectFit = "cover"; 
}


window.addEventListener("keydown", function(event) {
    
    if (event.keyCode == 68 && akumaPosition<1300) {  
        changeCharacterImage(getakuma, "https://www.fightersgeneration.com/characters/akuma-wkf.gif");
        
        akumaPosition += 20;
        getakuma.style.left = `${akumaPosition}px`;
    } else if (event.keyCode == 65 && akumaPosition>0) { 
        changeCharacterImage(getakuma, "https://www.fightersgeneration.com/characters/akuma-wkf.gif");
       
        akumaPosition -= 20;
        getakuma.style.left = `${akumaPosition}px`;
    } 
    
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode == 88) {  
        changeCharacterImage(getakuma, "https://www.fightersgeneration.com/characters/sf-akuma.gif");

        setTimeout(function(){
            changeCharacterImage(getakuma, "https://www.fightersgeneration.com/characters/akuma-ts-stance.gif");
           
        }, 4000);  
    } else if(event.keyCode == 87){
        changeCharacterImage(getakuma, "https://www.fightersgeneration.com/characters/aku-jump2.gif");
        
        setTimeout(function(){
            changeCharacterImage(getakuma, "https://www.fightersgeneration.com/characters/akuma-ts-stance.gif");
         
        }, 1000);  
    }
});
// window.addEventListener("keyup", function(event) {
//     if (event.keyCode !== 88 && event.keyCode !==87) {  
//         changeCharacterImage(getakuma, "https://www.fightersgeneration.com/characters/akuma-ts-stance.gif");
        
//     }
// });


window.addEventListener("keydown", function(event) {
    
    if (event.keyCode == 39  && ryuPosition<1300) {  
        changeCharacterImage(getryu, "https://www.fightersgeneration.com/np2/char1/kofxii/kyo-12-elbow.gif");
        
        ryuPosition += 20;
        getryu.style.left = `${ryuPosition}px`;
    } else if (event.keyCode == 37  && ryuPosition>0) { 
        changeCharacterImage(getryu, "https://www.fightersgeneration.com/np2/char1/kofxii/kyo-12-elbow.gif");
       
        ryuPosition -= 20;
        getryu.style.left = `${ryuPosition}px`;
    } 
    
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode == 76) {  
        changeCharacterImage(getryu, "https://www.fightersgeneration.com/np7/char/gifs/kyo/ex/attacks/kyo-ex-super3.gif");
        
        setTimeout(function(){
            changeCharacterImage(getryu, "https://www.fightersgeneration.com/np5/kof12/kyo-12s.gif");
         
        }, 3000);  
    } else if(event.keyCode == 38){
        changeCharacterImage(getryu, "https://www.fightersgeneration.com/np7/char/gifs/kyo/attacks/kyo-xi-special2.gif");
      
        setTimeout(function(){
            changeCharacterImage(getryu, "https://www.fightersgeneration.com/np5/kof12/kyo-12s.gif");
            
        }, 2000);  
    }
});
window.addEventListener("keyup", function(event) {
    if (event.keyCode !== 88 && event.keyCode !== 87) {
        changeCharacterImage(getakuma, "https://www.fightersgeneration.com/characters/akuma-ts-stance.gif");
        
    }
    if (event.keyCode !== 76 && event.keyCode !== 38) {
        changeCharacterImage(getryu, "https://www.fightersgeneration.com/np5/kof12/kyo-12s.gif");
        
    }
});
