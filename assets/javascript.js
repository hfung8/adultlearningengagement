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

var page1 = '<div style="background-color:beige;padding:5px;margin-top:15px;margin-bottom:15px"><h2>The goal of this learning guide is to introduce you to our new Customer Engagement Model (CEM), so that across our organization we can achieve a common vision and approach for how we engage with and serve our customers.</h2></div>'
page1 += '<div style="padding:5px"><h3>Learning Objectives:</h3>'
page1 += '<h4>After completing the activities in this learning guide, all employees of First Premium Bank, will be able to:</h4>'
page1 += '<ul><li>Describe the phases of the new Customer Engagement Model.</li><li>Consider our customer’s needs at each phase.</li><li>Identify the key behaviours that employees should be able to demonstrate in response to customer needs at each phase.</li><li>Reflect on the current customer service that you are delivering and on how it can be improved on using the new model.</li></ul></div>'

var page2 = '<div style="strong"><h3>Reflection: What do Our Customers Value Today?</h3></div>'
page2+= `<h4>According to a global survey conducted by The Marketing Consulting Group, a key driver, which is heralding change in our industry is Customer Value Evolution.<h4 style="font-style:italic; background-color:beige; padding:5px">Today's customers are cautious, smart, less trusting and loyal and now demanding better service and clearer value
from their business relationships. They are constantly asking, "Do you really provide a value add for me?"</h4>
</h4><br>`
page2+= '<div class="warmup"><div class="warm"><h3>Warm-Up Activity: Warm-Up Activity: Discuss the following with your colleagues:</h3>'
page2+= '<ul><li>1. How have your customer’s expectations evolved over the past three years?</li><li>2. In your opinion, who do you consider delivers an exceptional customer experience? What makes their client experience memorable? (Note: could be any competitor, or even a service you seek outside of our industry i.e. a favourite coffee provider)</li><li>3. Consider our current customer experience. What do you think that we do well? What might we improve on?</li></ul></div></div>'
page2+= '<textarea>Write down some of your thoughts</textarea>'

var page3 = "<div style='background-color:beige; padding:5px;margin-top:15px;margin-bottom:15px'>What is a Customer Engagement Model?"
page3+= '<p>The First Premium Bank Customer Engagement Model provides a framework and process for allowing us to enhance our customer experience. The goal is to make it easier for us to provide consistent and excellent customer service across the globe.</p></div>'
page3+= '<h4>What are the Benefits?</h4>'
page3+= '<ul><li>1. Provides employees across the company with a common understanding of how to deliver a ‘great’ customer experience.</li>'
page3+= '<li>2. Customers receive a consistent and excellent client experience no matter which division they deal with.</li>'
page3+= '<li>3. Coaches learn which behaviours to support in the workplace to enable better service.</li>'
page3+= 'Whether our customer is phoning into the call center, applying for a mortgage or trading investments online, they should receive expert advice and premium service from our teams to help guide their choices.'

var page4 = '<div style="background-color:beige; padding:5px; margin-top:15px; margin-bottom:15px"><h2>Why is this important?</h2>'
page4+= '<p>Consider the following statistics</p>'
page4+= '<ul><li>It costs between five and six times more to attract a new customer than to keep an existing one</li>'
page4+= '<li>Companies can boost profits anywhere from 25 to 125% by retaining merely 5% more existing customers</li><ul><div>'
page4+= '<p>According to Bruce Tempkin, author of The 6 Laws of Customer Experience, there is a high correlation between a customer’s experience and their willingness to make another purchase. Great customer experiences also drive customer loyalty, which leads to further sales. Customers who are satisfied are also more likely to recommend a company’s products or services to others</p>'
page4+= '<p>Delivering great customer experiences isn’t something that a small group of people can do on their own – everyone in the company needs to be fully engaged in the effort to make it happen.</p>'
page4+= '<p>We believe that through deepening our engagement with our customers, we will be able to retain customers and grow relationships. By getting to know our customers, we will be able to better understand their needs, so we can provide expert advice and recommend solutions that are right for them.</p>'

var page5 = '<div style="background-color:beige;padding:5px;margin-top:15px;margin-bottom:15px"><h2>Customer Engagement Model</h2>'
page5+= '<p>There are four main phases in the Customer Engagement Model, and our customer resides at the heart of what we do.</p>'
page5+= '<p>The first phase is Connect, where you greet and build rapport with our customers. The next phase involves getting to know your customer to Discover what matters most to them and what their immediate and future needs are. The third phase is the Advise stage, where we have an opportunity to recommend solutions that meet customer needs. The last stage is when you Commit to action and build the relationship further.</p>'
page5+= '<p>Let’s explore each phase in detail.</p>'

var page6 = '<div style="background-color:beige;padding:5px;margin-top:15px;margin-bottom:15px"><h2>Connect</h2>This is the initial phase of engagement with a customer where you make a connection by greeting a customer, building rapport, and taking owndership of their experience.</div>'
page6+= '<h4>Activity - Part A</h4><p>Let’s think back to the exceptional customer service experience that you considered on page 4. (It might have been a visit to your favourite coffees shop, or a trusted auto mechanic). What are some things this company or person(s) did to make you feel immediately connected and engaged with them?</p>'
page6+= '<textarea>Write down some of your thoughts</textarea>'

var page7 = '<div style="background-color:beige;padding:5px;margin-top:15px;margin-bottom:15px"><h4>Discover</h4>This is perhaps the most critical phase of the engagement cycle when you engage in conversation with your customers to find out what matters most to them and understand their needs. Without this, it’s next to impossible to deliver the right value and advice.</div>'
page7+= '<h4>Activity: Part A - Putting Ourselves in the Customer’s Shoes</h4>'
page7+= '<p>In the left hand column below are some of the key activities we do when conversing to discover client needs. In the column to the right, record what you think the client might see, feel or experience as you undertake each. Empathize with their situation...what are they thinking, seeing or feeling as we take them through a discovery conversation? Examples are provided to get you started.</p>'
page7+= '<table id="behaviors"><tr><th>Key Behaviours</th><th>What Does the Customer: See, Feel, Experience?</th></tr>'
page7+= '<tr><th>1. Ask open ended questions to understand the clients needs and goals.</th><th>e.g. customer feels that we are curious and interested in understanding their needs and goals.</tr></table>'

var page8 = '<table id="behaviors"><tr><th>2. Listen actively to words and feelings.</th><th>e.g. customer sees us nodding and giving non verbal cues that we are following.</th>'
page8+= '<tr><th>3. Paraphrase, acknowledge and confirm understanding.</th><th>e.g. customer feels relief at being ‘heard’</th></tr></table>'

var page9 = '<div style="background-color:beige;padding:5px;margin-top:15px;margin-bottom:15px"><h4>Advise</h4><p>Our customers tell us that they want our sales advisors, call centre agents, and retail service representatives to “be knowledgeable and provide solutions and options.” This takes creative problem solving, good communication and teamwork.</p></div>'
page9+= '<h4>Activity: Self-Assessment & Action Plan</h4><p>In the left hand column below are some key things we have heard from our customers that are important to them when we solve their problems and help them find solutions.</p><p>Step One – Assess yourself. How would you rate yourself on meeting these requirements for your own customers? Excellent? Good? Fair? Or is some Improvement Needed?</p>'

var page10 = '<table id="behaviors><tr><th>Advise – Key Behaviours<th><th>E-Excellent, G-good, F-fair NI – Needs Improvement</th></tr></table>'


var array = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10];

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