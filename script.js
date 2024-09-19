// can either do button.on("click", doSomething) or button.addEventListener("click", function onClick (event))

//san francisco, houston, singapore, copenhagen, zurich, tokyo, san jose (costa rica), dubai, 

// var button = $("button");
// var sanFrancisco = $(".sanFrancisco");

// var cityFacts = ["San Francisco, Houston, Singapore,"]

// sanFrancisco.on("click", assignIndex1)

// button.on("click", learnMore);

// function learnMore () {
  
//   var learnContainer = $(".learnContainer");
//   learnContainer.append(`
//   <div class = "expanded"> ${cityFacts[index]} </p>
//   <button class = "delete"> x </button>
//   </div>`)
// }

var learnContainer = $(".learnContainer");
learnContainer.on("click",deleteText);

function deleteText (event) {
  if (event.target.className === "delete") {
    event.target.parentNode.remove();
  }
    
}

var sanFrancisco = $(".sanFrancisco")

sanFrancisco.on("click", expandSanFrancisco)

function expandSanFrancisco () {
  var addSanFrancisco = $(".addSanFrancisco");
  addSanFrancisco.empty()
  addSanFrancisco.append(`<div class = "contained"> San Francisco's eco revolution has been transforming the community in recent years. About 77% of the waste in San Francisco is recycled. The city was also the first in American to prohibit the use of plastic. About 13.8 out of every 10,0000 homes uses solar energy, which double the average in the US. Lastly, San Francisco is one of the top places you can travel car-free because of its well established and efficient public transportation system.
 <button class = "delete"> x </button>
  </div>`);
  
}

var houston = $(".houston")

houston.on("click", expandHouston)

function expandHouston () {
  var addHouston = $(".addHouston");
  addHouston.empty()
  addHouston.append(`<div class = "contained"> Globally known as the “Energy Capital of the World” for its oil rich land and proximity to the Gulf, Houston ranks number 59 on the Sustainable City Index. It ranks high in profitability and economic sustainability due to its economic prosperity and high rate of employment opportunities. However, it ranks much lower in the social and environmental sustainability categories. Fortunately, the city of Houston is making strides in sustainability through the release of its <a href="http://greenhoustontx.gov/climateactionplan/CAP-April2020.pdf"> Climate Action Plan</a> in 2020 that includes strategies for initiatives across public transportation, energy transition, green building optimization, and materials management. <button class = "delete"> x </button>
  </div>`);
}

var singapore = $(".singapore")

singapore.on("click", expandSingapore)

function expandSingapore () {
  var addSingapore = $(".addSingapore");
  addSingapore.empty()
  addSingapore.append(`<div class = "contained"> From a social sustainability lens, Singapore ranks top five globally for its strong, affordable amenities, excellent education, and low-income inequality. <a href="https://thesustainablelivingguide.com/most-sustainable-cities/"> Nearly 40%</a> of Singapore’s water comes from used water that’s been purified and treated. Singapore is recognized as a ‘Global Hydrohub’ and arguably home to the densest concentration of water companies globally. It’s <a href="https://www.edb.gov.sg/en/our-industries/urban-solutions-and-sustainability.html"> striving towards a target of ‘greening’ 80%</a> of its buildings by 2030 through the S$50 million Green Mark Incentive Scheme, and has greened approx. 1/3 of its buildings as of June 2017. Singapore has this year <a href="https://www.cirsd.org/en/horizons/horizons-summer-2019-issue-no-14/towards-singapores-sustainability-key-tenets-of-our-approach-to-sustainable-development">implemented an economy-wide carbon tax </a>to incentivize the shift towards a low-carbon economy. Finally, they’ve pushed towards adopting a circular economy approach to resource management by moving from a linear ‘take-make-throw’ model to one that reuses and recycles our resources for as long as possible. <button class = "delete"> x </button>
  </div>`);
}

var copenhagen = $(".copenhagen")

copenhagen.on("click", expandCopenhagen)

function expandCopenhagen () {
  var addCopenhagen = $(".addCopenhagen");
  addCopenhagen.empty()
  addCopenhagen.append(`<div class = "contained"> Copenhagen is known to be one of the “greenest” cities globally and is aiming to be the first carbon-neutral capital in the world by 2025. Among their strives towards sustainability includes converting all of the city’s diesel run buses to electric power by 2030. In addition to this, they’re also expanding their road infrastructure for cycling with electric bikes, which are already being sold at an affordable cost for its residents. Notably, Copenhagen also sends <a href="https://ec.europa.eu/environment/europeangreencapital/wp-content/uploads/2012/07/Copenhagen-Short-Leaflet_Web.pdf"> less than 2% of its waste to landfills </a> - down from 44% in 1998. People regard waste as a resource and nearly 58% of all waste is recycled and 40% is used to fuel the city’s district heating network. When it comes to social sustainability, Copenhagen is also exemplary for being an inclusive center that has successfully mixed-use and mixed-income integrated neighborhoods. Globally, it ranks 42 in economic sustainability on the Arcadis Sustainable City Index 2022. 
 <button class = "delete"> x </button>
  </div>`);
}

var zurich  = $(".zurich")

zurich.on("click", expandZurich)

function expandZurich () {
  var addZurich = $(".addZurich");
  addZurich.empty()
  addZurich.append(`<div class = "contained"> Zurich aims to be climate neutral and <a href= "https://www.stadt-zuerich.ch/portal/en/index/portraet_der_stadt_zuerich/environmental-strategy.html"> reduce its direct greenhouse gas emissions to net zero by 2040</a>. Notably, Zurich has an affordable and efficient public transport system <a href= "https://thinksustainabilityblog.com/2017/06/21/sustainable-cities-zurich-switzerland/"> with bus or tram stops every 300m</a> in the city. The city also enforces a “cap and trade” strategy for parking spaces where for every off-street spot built, an on-street parking spot is converted into park or community space, along with <a href = "https://www.scientificamerican.com/article/reducing-parking-cut-auto-emission/"> a maximum allowance in parking standards for new developments</a>. These implementations have allowed the city to effectively cut on auto emissions and reduce dependency on cars. <a href= "https://www.urbangreenbluegrids.com/projects/zurich-switzerland/"> In 1991</a>, the city of Zurich established a green roof program where all flat roof space that is not being used as a roof terrace must be ‘greened’ in the renovation and construction of housing developments. These green roofs have enabled an increase in biodiversity, positively impacted the water cycle, and resulted in energy savings through the reduction of heat stress. For its socio-economic sustainability, Zurich has a combination of high levels of productivity and low non-wage labor,<a href="https://thinksustainabilityblog.com/2017/06/21/sustainable-cities-zurich-switzerland/"> lowering the cost of production in comparison to other metroplexes globally</a>. <button class = "delete"> x </button>
  </div>`);
}

var tokyo  = $(".tokyo")

tokyo.on("click", expandTokyo)

function expandTokyo () {
  var addTokyo = $(".addTokyo");
  addTokyo.empty()
  addTokyo.append(`<div class = "contained"> Globally, Tokyo ranks third overall for sustainability because of its strong transport, connectivity, and green finance. The city hopes that by 2030, 50% of all the new cars that are sold will be zero-emission. Tokyo also plans to have 30% of it’s city run by renewable energy sources, and they continue to lead in having one of the most low-carbon emission public transportation systems around the world. <button class = "delete"> x </button>
  </div>`);
}

var sanJose  = $(".sanJose")

sanJose.on("click", expandSanJose)

function expandSanJose () {
  var addSanJose = $(".addSanJose");
  addSanJose.empty()
  addSanJose.append(`<div class = "contained"> The capital of San Jose is seen as a sustainable model for other central American cities to follow. The entire country’s power grid is most notably powered by 98% renewable resources, and is home to one of the highest rates of net-zero power in the world. Costa Rica’s <a href="https://ticotimes.net/2019/02/26/a-plan-to-decarbonize-by-2050-questions-on-how-to-pay-for-it"> decarbonization strategy</a> also includes a plan to introduce a modern transportation system in San José that will promote walking and biking, and feature fully electric trains by 2050. Its clean energy generation — which powers more than 1.5 million homes and 225,000 businesses — has saved the country nearly $500 million over the past 20 years compared to relying on fossil fuels. <button class = "delete"> x </button>
  </div>`);
}

var dubai = $(".dubai")

dubai.on("click", expandDubai)

function expandDubai () {
  var addDubai = $(".addDubai");
  addDubai.empty()
  addDubai.append(`<div class = "contained"> Although Dubai is known for one of the highest rates of carbon emissions per capita in the world and its natural-resource based economy, through its <a href="https://www.government.ae/en/about-the-uae/uae-future">“Energy Strategy 2050”</a>, it aims to push the contribution of clean energy to total energy usage to <a href="https://blog.dormakaba.com/dubai-2050-a-desert-citys-race-to-be-the-worlds-most-sustainable/"> 50 percent by 2050</a> while reducing the carbon footprint of power generation by 70 percent. Also located in Dubai, <a href="https://www.thesustainablecity.ae/"> The Sustainable City</a> is working to become the first operational Net Zero Energy city in the nation-state region. The SC is also home to <a href="https://www.thesustainablehumanproject.com/"> The Sustainable Human Project</a> that is testing testing sustainable living by creating a small-scale circular economy where residents grow food in the community farms and barter with neighbors for other essentials. <button class = "delete"> x </button>
  </div>`);
}