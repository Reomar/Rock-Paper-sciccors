console.log("%cIt seems like you'r interested, here's a tutorial: https://www.youtube.com/watch?v=jaVNP3nIAv0",'color:teal;font-size:20px;');


var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("userScore");
var compScore_span = document.getElementById("compScore");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var sicors_div = document.getElementById("s");




//change r,p,s to real names
function conventer(aName){
    switch(aName){
        case "r" : return "Rock";
        case "p" : return "paper";
        case "s" : return "scissors"
    }
}

//get random choice for computer
function getCompInput(){
    var choices = ["r","p","s"]
    var random = Math.floor(Math.random() *3);
    return choices[random];
}

//making comparsion to see the result
function game(userInput){
    //graps the div to ad colord glow
        userGlow = document.getElementById(userInput);

    var compInput = getCompInput();
    switch(userInput+compInput){
        //win 
        case "rs":
        case "pr":
        case "sp":
        win(userInput,compInput);
        console.log("%cWins", 'color:green;');
        break;

        //lose 
        case "sr":
        case "rp":
        case "ps":
        lose(userInput,compInput);
        console.log("%close",'color:red;')
        break;

        //Draw
        case "rr":
        case "pp":
        case "ss":
        draw(userInput,compInput);
        console.log("%cDraw", 'color:gray;')
        break;
    };
}

//wining 
function win(userInput,compInput){
    userScore++
    userScore_span.innerHTML = userScore;
    switch(userInput+compInput){
        case "rs": result_p.innerHTML = `<span class="redBg">${conventer(userInput)}</span> crushes ${conventer(compInput)}<br> Point for you! 🔥 ` 
    break;
        case "pr": result_p.innerHTML = `<span class="redBg">${conventer(userInput)}</span> covers ${conventer(compInput)}<br> Point for you! 🔥 `
    break;
        case "sp": result_p.innerHTML = `<span class="redBg">${conventer(userInput)}</span> cuts ${conventer(compInput)}<br> Point for you! 🔥 `
    break;
    };

    userGlow.classList.add("greenGlow"); 
    setTimeout(() => userGlow.classList.remove("greenGlow"), 300);  
}

//loosing
function lose(userInput,compInput){
    compScore++
    compScore_span.innerHTML = compScore;
    switch(userInput+compInput){
        case "sr": result_p.innerHTML = `${conventer(compInput)} crushes <span class="redBg">${conventer(userInput)}</span><br> Point for AI 🙄` 
    break;
        case "rp": result_p.innerHTML = `${conventer(compInput)} covers <span class="redBg">${conventer(userInput)}</span><br> Point for AI 🙄`
    break;
        case "ps": result_p.innerHTML = `${conventer(compInput)} cuts <span class="redBg">${conventer(userInput)}</span><br> Point for AI 🙄`
    break;
    };
    userGlow.classList.add("redGlow");   
    setTimeout(() => userGlow.classList.remove("redGlow"),300);
};

//draw
function draw(userInput,compInput){
    switch(userInput+compInput){
        case "rr": result_p.innerHTML = "Both choosed Rock <Br> lol it's a Draw 🤡"
        break;
        case "pp" : result_p.innerHTML = "Both choosed Paper <Br> lol it's a Draw 🤡"
        break;
        case "ss" : result_p.innerHTML = "Both choosed Scissor <Br> lol it's a Draw 🤡"
    }
    userGlow.classList.add("grayGlow")
    setTimeout(() => userGlow.classList.remove("grayGlow"),300);   
};


//recevie users input 
function main(){
    rock_div.addEventListener('click' , function(){
        game("r");
    });

    paper_div.addEventListener('click' , function(){
        game("p");
    });

    sicors_div.addEventListener('click' , function(){
        game("s");
    });

    
    
};

main()

