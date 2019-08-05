 var eventType = "";
 var tempFahr = 0;
 var result = "";
 
 var eventType = prompt("Please enter Event type", " ");
 var tempFahr = prompt("Please enter Temperature", " ");


//-----Casual event----
  if (eventType == "casual") {
  
  if (tempFahr < 54) {
result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear something comfy and a coat."
	}
	  if ((tempFahr > 54) && (tempFahr < 70) ) {
result = "Since it is " + tempFahr + " degrees and you are going to a" + eventType + " event you should wear something comfy and a jacket."
	}
	
		  if (tempFahr > 70 ) {
result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear something comfy with no jacket."
	}


  }
  
 //-----Semi-formal event----
  if (eventType == "semi-formal") {
  
  if (tempFahr < 54) {
result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a polo and a coat."
	}
	  if ((tempFahr > 54) && (tempFahr < 70) ) {
result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a polo and a jacket."
	}
	
		  if (tempFahr > 70 ) {
result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a polo with no jacket."
	}


  }
 
 //-----formal event----
  if (eventType == "formal") {
  
  if (tempFahr < 54) {
result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a suit and a coat."
	}
	  if ((tempFahr > 54) && (tempFahr < 70) ) {
result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a suit and a jacket."
	}
	
		  if (tempFahr > 70 ) {
result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear a suit with no jacket."
	}


  }
  
  
 alert(result);