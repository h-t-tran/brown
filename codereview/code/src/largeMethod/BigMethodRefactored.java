package largeMethod;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class BigMethodRefactored {

	static ArrayList<String> parseXmlDataAndSendEmail(String filename) {
		
		ArrayList<String> resultData = new ArrayList<String>();
		
		// extract to smaller method.
		if(! _isXmlFileValid(filename) ) {
			return resultData;
		}
		
		try(BufferedReader br = new BufferedReader(new FileReader(filename))) {
			String line;
			while ( (line = br.readLine()) != null) {

				String data = _extractDataField(line);
				if( data != null) {
					resultData.add(data);
				}

				if(line.contains("email")) {
					_sendEmail(data);				
				}
												
		        line = br.readLine();
		    }

		} 
		catch(Exception e) {
			_handleRecovery(e);			
		}
		
		return resultData;

	}

	/**
	 * this method can be expanded for more complex validity check in the future.
	 */
	private static boolean _isXmlFileValid(String filename) {
		return filename == null || filename.isEmpty() || filename.indexOf(".xml") == -1;
	}
	
	/**
	 * 
	 * @param line
	 * @return
	 */
	private static String _extractDataField(String line) {
		String data = null;
		
		// find first '>'
		int firstEndSymbolIdx 		= line.indexOf('>');
		
		// find 2nd '>' symbol
		int secondStartSymbolIdx 	= line.indexOf(firstEndSymbolIdx, '<');
		
		if(firstEndSymbolIdx != -1 && secondStartSymbolIdx != -1) {
			// get the data
			data 				= line.substring(firstEndSymbolIdx, secondStartSymbolIdx);

		}

		return data;
	}
	
	/**
	 * 
	 * @param emailAddress
	 */
	private static void _sendEmail(String emailAddress) {
		// Let's pretend you have a SMTP object that handles emailing.
		/***
		Smtp mailer = new Smtp();
		mailer.to = data;
		mailer.from = Environement.currentUser;
		mailer.subject = "....";
		mailer.body = "hello world";
		try {
			mailer.send();
		}
		catch(Exception e) {
			...
		}
		***/		
	}
	
	/**
	 * 
	 * @param e
	 */
	private static void _handleRecovery(Exception e) {
		System.err.println("Unexpected exception. Detail:  " + e.getMessage());
	}
	
	
}

