
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var allWidthsButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$("#menuBar1").width("500px");
		$("#menuItem1").width("100px");
		$("#menuItem2").width("200px");
		$("#menuItem3").width("100px");


	};// @lock

	allWidthsButton.click = function allWidthsButton_click (event)// @startlock
	{// @endlock
		$("#menuBar1").width("500px");
		$("#tabView1 li").width("150px");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("allWidthsButton", "click", allWidthsButton.click, "WAF");
// @endregion
};// @endlock
