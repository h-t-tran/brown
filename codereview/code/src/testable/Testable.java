package testable;

import org.apache.commons.httpclient.*;
import org.apache.commons.httpclient.methods.*;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.apache.log4j.Logger;

import consistency.CvsFileParser;

public class Testable {
	private final static Logger _log = Logger.getLogger(CvsFileParser.class
			.getName());

	public interface AjaxInterface {
		int invoke(String url, StringBuffer response);
	}

	public interface LoggeableInterface {
		void error(String msg, Throwable t);
		void error(String msg);
	}

	public static boolean invokeAjax(String url, AjaxInterface ajax, LoggeableInterface log) {

		boolean result = false;
		try {
			StringBuffer responseBody = new StringBuffer();
			int statusCode = ajax.invoke(url, responseBody);
			
			if (statusCode != HttpStatus.SC_OK) {
				_log.error("Method called failed");
			}

			if (responseBody.toString().isEmpty()) {
				_log.error("no data error");
			} else {

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
