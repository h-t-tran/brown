package consistency;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.apache.log4j.Logger;

/**
 * Let's pretend this is an existing code that has passed previous reviews.
 */
public class CvsFileParser {
	
	// (1) - private var
	private static Logger _log = Logger.getLogger(CvsFileParser.class.getName());
	
	// (2) - constants
	private final static String _ERROR_MSG_PREFIX = "CSV Parse Error: ";
	
	public boolean parse(String filename) {
		// (3)
		// Precondition checks
		if(filename == null || filename.isEmpty()) {
			return false;
		}
		
		//
		// (4) main logic
		//
		boolean result = false;
		
		try {
			BufferedReader br = new BufferedReader(new FileReader(filename));
			String line;
			while ( (line = br.readLine()) != null) {
					
				// Do something with the line
				
		        line = br.readLine();
		    }
			
			result = true;
		} 
		catch(IOException e) {
			_log.error(_ERROR_MSG_PREFIX + ".  Problem with IO. " + e.getMessage(), e);
		}
		catch(Exception e) {
			
			// (5) - always prefix the error message.
			//     - usage of 2-argument error() overloads.
			_log.error(_ERROR_MSG_PREFIX + ".  Unexpected exception. Detail:  " + e.getMessage(), e);
		}
		
		// (6) - single point of exit
		return result;
	}
}

