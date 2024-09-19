
var returned = $(".returned");
var script = $(".script");


script.on("click", generateScript);


function generateScript(event) {
  event.preventDefault();
  var input = $('.name');
  var name = input.val();
  console.log(name);
  var input = $('.city');
  var city = input.val();
  console.log(city);
  returned.empty()
  returned.append (`
  
  Hi, my name is ${name} and I live in the city of ${city}. I am writing you in the hopes of spreading awareness about sustainability within ${city}. The current state of our city is declining and is facing unlivable conditions for residents. Preserving the city can start by making efforts to promote public transportation and encouraging residents to make more environmentally conscious choices in their day-to-day lives. These efforts may seem small but over time they will help strengthen the community and the environment. Please consider advocating for sustainability within ${city}.
  </br>
  <button class="clear"> clear script</button>
  `)

};

returned.on("click", deleteScript);

function deleteScript(event) {
  if (event.target.className === "clear") {
    event.target.parentNode.remove();
  }  
}




