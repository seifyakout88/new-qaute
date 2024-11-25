


var currentMessageIndex = 0; 

function getMessage(index) {
    if (index === 0) {
        return "It's not what happens to you, but how you react to it that matters.";
    } else if (index === 1) {
        return "The best revenge is massive success.";
    } else if (index === 2) {
        return "Be yourself; everyone else is already taken.";
    } else if (index === 3) {
        return "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.";
    } else if (index === 4) {
    return "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
    } else if (index === 5) {
        return "A room without books is like a body without a soul.";
    }
}

function addMassage() {
    var mydata = document.getElementById('mydata');

    var message = getMessage(currentMessageIndex);

    mydata.textContent = message;

    currentMessageIndex++;

    if (currentMessageIndex > 3) {
        currentMessageIndex = 0;
    }
}