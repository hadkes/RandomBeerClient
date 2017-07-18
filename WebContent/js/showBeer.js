
function show(){
	$.ajax({
		contentType: 'application/JSON',
		type: "GET",
		url: 'http://localhost:8080/RandomBeer/randombeer',
		success: function(result){
			displayBeerDetails(result);
		}
	});
	
	function displayBeerDetails(beer){
		$('table.docutils').attr('border', '1');
		
		$("#beerNameLabel").text("Beer Name:");
		$("#beerNameValue").text(beer.name);
		
		$("#beerDescLabel").text("Beer Description:");
		$("#beerDescValue").text(beer.description);
		
		$("#beerCostLabel").text("Beer Cost:");
		$("#beerCostValue").text(beer.cost);
		
		$("#beerAlcoholPercentageLabel").text("Beer Alcohol (In Percentage):");
		$("#beerAlcoholPercentageValue").text(beer.alcoholPercentage);
		
		$("#providerNameLabel").text("Provider Name:");
		$("#providerNameValue").text(beer.provider.name);
		
		$("#providerAddressLabel").text("Provider Address:");
		$("#providerAddressValue").text(beer.provider.address.address1 +", "+beer.provider.address.address2+", "+beer.provider.address.state+", "+beer.provider.address.country);
	}
}
