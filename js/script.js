
document.getElementById('load-quote').addEventListener("click" , printQuote);

var  quoteArray = []; // java script blank array

// -- I am creating all quote object and then lastly will push in array
// -- Also i am not using real quote.. i will use sample text so please replace with some real or meaningful word
var  quoteObject1 = {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source:'Nelson Mandela',
    citation: ''    
};

var  quoteObject2 = {
    quote: 'The way to get started is to quit talking and begin doing.',
    source:'Walt Disney',
    citation: '',
    year: 'Year 2000' 
};
var  quoteObject3 = {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source:'Eleanor Roosevelt',
    year: '2003'    
};
var  quoteObject4 = {
    quote: 'If you look at what you have in life, you will always have more. If you look at what you dont have in life, you will never have enough.',
    source:'Oprah Winfrey'    
};
var  quoteObject5 = {
    quote: 'If you set your goals ridiculously high and it is a failure, you will fail above everyone else success.',
    source:'James Cameron',
    year: '2005'    
};
//----------------------------Similar way we can add more objects
//  --- Adding above objects in array
quoteArray.push(quoteObject1);
quoteArray.push(quoteObject2);
quoteArray.push(quoteObject3);
quoteArray.push(quoteObject4);
quoteArray.push(quoteObject5);

//-- This method will generate random number and we will use that number to show quote
function getRandomQuote() {
    var lenghtOfQuoteArray = quoteArray.length;
    //-- below line will generate random number from 0 to length of array
    var randomNumber = Math.floor(Math.random() * lenghtOfQuoteArray);
    return quoteArray[randomNumber]; // returning quote object

}

//-- This function will generate HTML string and that will be shown in browser page.
function printQuote(){
 var quoteObject = getRandomQuote(); //-- Function will call method and return random object
 var htmlString = "<p class='quote'>" + quoteObject.quote + "</p><br>";
 htmlString += "<p class='source'>" + quoteObject.source +"</p><br>";
 //---Checking if citation and year exists then add in htmlString 
 if(quoteObject.citation){
    htmlString += "<p class='citation'>" + quoteObject.citation +"</p><br>";
 }
 if(quoteObject.year){
    htmlString += "<p class='year'>" + quoteObject.year +"</p><br>";
 }

 document.getElementById('quote-box').innerHTML = htmlString; // assigning the string to div body

}