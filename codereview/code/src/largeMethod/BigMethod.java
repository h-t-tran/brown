package largeMethod;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class BigMethod {
	
	/**
	 * Give a file of this content
	 * 
	 * 		<firstname>john</firstname>
	 * 		<lastname>doe</lastname>
	 * 	    <age>20</age>
	 * 		<address>123 nowhere street</address>
	 * 		<email>john2@google.com</address>
	 *        ....
	 * 		<firstname>jane</firstname>
	 * 		<lastname>smith</lastname>
	 * 	    <age>30</age>
	 * 		<address>123 nowhere street</address>
	 * 		<email>jane@google.com</address>
	 * 			...
	 * 	    <firstname>John</firstname>
	 * 		<lastname>Jones</lastname>
	 * 	    <age>30</age>
	 * 		<address>123 nowhere street</address>
	 * 		<email>john@google.com</address>
	 * 			...
	 * 
	 * 	1. extra all the data and return an array list of data
	 *  2. for those that email, send an email.
	 * @return
	 *	An array of data.  For instance array list of [ "john", "doe", "20", "123 nowhere street", ...]
	 */
	static ArrayList<String> parseXmlDataAndSendEmail(String filename) {
		ArrayList<String> resultData = new ArrayList<String>();
		
		if(filename == null || filename.isEmpty() || filename.indexOf(".xml") == -1) {
			return resultData;
		}
		
		try(BufferedReader br = new BufferedReader(new FileReader(filename))) {
			String line;
			while ( (line = br.readLine()) != null) {

				//
				// Extract the data
				//
				
				// find first '>'
				int firstEndSymbolIdx 		= line.indexOf('>');
				if(firstEndSymbolIdx == -1) {
					continue;
				}
					
				// find 2nd '>' symbol
				int secondStartSymbolIdx 	= line.indexOf(firstEndSymbolIdx, '<');
				if(secondStartSymbolIdx == -1) {
					continue;
				}
				
				// get the data
				String data 				= line.substring(firstEndSymbolIdx, secondStartSymbolIdx);
				resultData.add(data);
				
				//
				// if there is email
				//
				if(line.contains("email")) {
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
				
				
				
		        line = br.readLine();
		    }

		} 
		catch(Exception e) {
			System.err.println("Unexpected exception. Detail:  " + e.getMessage());
		}
		
		return resultData;

	}
}

