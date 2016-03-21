package consistency;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.apache.log4j.Logger;

/**
 * 
 *  Let's pretend this is written a new developer recently joined the team.
 *
 */
public class XmlParser {
	
	private final static Logger myLogger = Logger.getLogger(XmlParser.class.getName());
	
	public boolean parse(String filename) {

		try {
			BufferedReader br = new BufferedReader(new FileReader(filename));
			String line;
			while ( (line = br.readLine()) != null) {
					
				// Do something with the line
				
		        line = br.readLine();
		    }
		} 
		catch(NullPointerException e) {
			System.out.println(e.getMessage());
			myLogger.error(e.toString());
			return false;
		}
		catch(IOException e) {
			e.printStackTrace();
			return false;
		}
		catch(Exception e) {
			System.err.println(e.toString());
			return false;
		}

		return true;
	}
}
