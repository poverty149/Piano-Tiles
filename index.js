var piano=document.querySelectorAll(".piano")
var n=piano.length;

console.log(n);

for(var i=0;i<n;i++){
    piano[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });

}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    
});
function makeSound(key){
    var audio;
    switch (key){
        case "c":
            audio= new Audio("Sounds/203479__tesabob2001__c3.mp3");
            break;
         case "cd":
            audio= new Audio("Sounds/203466__tesabob2001__c-3.mp3");
            break;
         case "d":
            audio= new Audio("Sounds/203486__tesabob2001__d3.mp3");
            break;
        case "de":
            audio= new Audio("Sounds/203483__tesabob2001__d-3.mp3");
            break;
         case "e":
            audio= new Audio("Sounds/203470__tesabob2001__e3.mp3");
            break;
         case "f":
            audio= new Audio("Sounds/203468__tesabob2001__f3.mp3");
            break;
        case "fg":
            audio= new Audio("Sounds/203477__tesabob2001__f-3.mp3");
            break;
         case "g":
            audio= new Audio("Sounds/203493__tesabob2001__g3.mp3");
            break;
         case "ga":
            audio= new Audio("Sounds/203488__tesabob2001__g-3.mp3");
            break;
        case "a":
            audio= new Audio("Sounds/203458__tesabob2001__a3.mp3");
            break;
         case "ab":
            audio= new Audio("Sounds/203461__tesabob2001__a-3.mp3");
            break;
         case "b":
            audio= new Audio("Sounds/203467__tesabob2001__b5.mp3");
            break;
        default:
            audio= new Audio("Sounds/203467__tesabob2001__b5.mp3");
            console.log(key);
            break;

    }audio.play();
}
function buttonAnimation(key){

    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function(){document.querySelector("." + key).classList.remove("pressed")}, 2);
}