RestService_NotTestable = {
		
		retrieveData = function( url ) {
			$.ajax(url, {
			      success: function(response) {
			    	 
			    	  // 
			    	  // How do we unit test this logic ?
			    	  //
			    	 var data = JSON.parse(response);
			    	 if(data.success) {
			    		 if(data.payload.length > 0) {
			    			 // process payload
			    		 }
			    		 else {
			    			 // process default payload
			    		 }
			    	 }
			    	 else {
			    		 displayToastMsg(data.errorMsg);
			    	 }
			    	 
			      },
			      error: function(error) {
			    	  //
			    	  // How do we unit test this logic to make sure the toast message will contain the error string?
			    	  //
			    	  displayToastMsg(('An error occurred.  The error is ' + error);
			      }
			   });
		}
}

///////////////////////////////////////////////////////////////////////
//
RestService_Testable = {
		
		retrieveData = function( url ) {
			$.ajax(url, {
			      success: function(response) {
			    	  RestService_Testable.onSuccess(response);
			      },
			      error: function(error) {
			    	  RestService_Testable.onError(error);
			      }
			   });
		};
		
		/**
		 * 
		 */
		onSuccess = function(response) {
	    	 var data = JSON.parse(response);
	    	 if(data.success) {
	    		 if(data.payload.length > 0) {
	    			 // process payload
	    		 }
	    		 else {
	    			 // process default payload
	    		 }
	    	 }
	    	 else {
	    		 displayToastMsg(data.errorMsg);
	    	 }
		};
		
		/**
		 * 
		 */
		onError = function(error) {
			displayToastMsg(('An error occurred.  The error is ' + error);
		}
		
}