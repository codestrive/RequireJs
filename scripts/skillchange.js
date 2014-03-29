define(["bootbox"], function(bootbox) {
 
  return {
	eventListener: function() {	 

	var divs = document.getElementsByClassName('img-responsive');

	for(var j=0; j<divs.length; j++) { 

	  divs[j].onclick=function(){ 
	  	
	  		var className = this.getAttribute('class');
	  		var ID = this.getAttribute('id');
		    if(!!className.match('default')) {
		    	this.setAttribute('class', className.replace('default', '') + 'removed');
		    	bootbox.alert("<strong>Shook!!</strong> You just removed <strong>"+ID+"</strong> from your skill set.", function() {});

		    }		    	
		    else if (!!className.match('removed')) {
		    	this.setAttribute('class', className.replace('removed', '') + 'default');
		    	bootbox.alert("<strong>Woohoo!!</strong> You've just added <strong>"+ID+"</strong> to your skill set.", function() {});
		    }  	
	  	
	  };
	}
    }

  }
});