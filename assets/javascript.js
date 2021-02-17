document.addEventListener("DOMContentLoaded", function(){
//global variables
var startButton = document.querySelector(".startButton");
var customerEngagementDiv = document.getElementById("customerEngagementModel");
var clicked = false;
var container = document.querySelector('.container');
var page;
var pageArray = [];
var continueButton = document.querySelector(".continue");
var warmUpButton;
//helper functions
var createElem = function(elem){
    var target = document.createElement(elem);
    return target;
}

var addToStyle = function(elem, attr){
    elem.setAttribute("style", attr);
}

var addClass = function(elem, targetClass){
    elem.classList.add(targetClass);
}

// setting up quote and page selection
var quote = `“Never underestimate your impact.
Going forward, the single most important influence on our success will be the interactions that you have each day with our customers.”
Michael Schwartz, CEO, First Premium Bank`
var quoteDiv = createElem("div");
quoteDiv.innerText = quote;
addClass(quoteDiv, 'sitemessage');
container.appendChild(quoteDiv);

document.addEventListener('click', function (event) {
    function registerClickEvent(){
        if (event.target.matches('.startButton')) clicked = true;
    }

    registerClickEvent();
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.startButton')) return;

    console.log(clicked);

	// Don't follow the link
    event.preventDefault();

}, false);

// starter code
startButton.addEventListener("click", function(event){
    event.preventDefault();
    setElements();
})

var page1 = '<div style="strong"><h2>The goal of this learning guide is to introduce you to our new Customer Engagement Model (CEM), so that across our organization we can achieve a common vision and approach for how we engage with and serve our customers.</h2></div>'
page1 += '<h3>Learning Objectives:</h3>'
page1 += '<h4>After completing the activities in this learning guide, all employees of First Premium Bank, will be able to:</h4>'
page1 += '<ul><li>Describe the phases of the new Customer Engagement Model.</li><li>Consider our customer’s needs at each phase.</li><li>Identify the key behaviours that employees should be able to demonstrate in response to customer needs at each phase.</li><li>Reflect on the current customer service that you are delivering and on how it can be improved on using the new model.</li></ul>'

var page2 = '<div style="strong"><h3>Reflection: What do Our Customers Value Today?</h3></div>'
page2+= `<h4>According to a global survey conducted by The Marketing Consulting Group, a key driver, which is heralding change in our industry is Customer Value Evolution.<h4 style="color:white; font-style:italic">Today's customers are cautious, smart, less trusting and loyal and now demanding better service and clearer value
from their business relationships. They are constantly asking, "Do you really provide a value add for me?"</h4>
</h4><br>`
page2+= '<div class="warmup"><div class="warm"><h3>Warm-Up Activity: Warm-Up Activity: Discuss the following with your colleagues:</h3>'
page2+= '<ul><li>1. How have your customer’s expectations evolved over the past three years?</li><li>2. In your opinion, who do you consider delivers an exceptional customer experience? What makes their client experience memorable? (Note: could be any competitor, or even a service you seek outside of our industry i.e. a favourite coffee provider)</li><li>3. Consider our current customer experience. What do you think that we do well? What might we improve on?</li></ul></div></div>'
page2+= '<textarea>Write down some of your thoughts</textarea>'

var page3 = "<div style='background-image: url('./assets/businessGroup.jpg')'>What is a Customer Engagement Model?</div>"
var array = [page1, page2, page3];

function createPage(){
    for ( var i = 0; i < array.length; i++){
        pageArray.push(array[i]);
    }
    page = pageArray.shift();
    console.log(page);
        container.innerHTML = page;
    }

function setElements(){
    addToStyle(customerEngagementDiv, `display:none`);
    addToStyle(continueButton, "display:''");
    continueButton.addEventListener("click", function(){
        createPage();
    })
    createPage();

}



















})