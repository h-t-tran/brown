package testable;

import org.apache.commons.httpclient.*;
import org.apache.commons.httpclient.methods.*;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.apache.log4j.Logger;

import consistency.CvsFileParser;

public class NotTestable {
	private final static Logger _log = Logger.getLogger(CvsFileParser.class.getName());
	
	
	public static boolean invokeAjax(String url) {

		boolean result = false;
	    HttpClient client = new HttpClient();
	    GetMethod method = new GetMethod(url);
	    method.getParams().setParameter(HttpMethodParams.RETRY_HANDLER, 
	    								new DefaultHttpMethodRetryHandler(3, false));

	    try {
	      int statusCode = client.executeMethod(method);
	      if (statusCode != HttpStatus.SC_OK) {
	          _log.error("Method called failed");
	      }

	      String responseBody = new String(method.getResponseBody());

	      if(responseBody.isEmpty()) {
	    	  _log.error("no data error");
	      }	   
	      else {
	    	  
	    	  // *** Main logic we want to test ***
	    	  
	    	  // JSONObject obj = new JSONObject(responseBody)
	    	  // extract fields.
	    	  // do something with the fields.
	    	  result = true;
	      }
	    } 
	    catch (Exception e) {
	      _log.error("Fatal transport error: " + e.getMessage(), e);
	    } 

	    return result;
	}
}
