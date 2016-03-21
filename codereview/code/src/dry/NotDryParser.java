package dry;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.apache.log4j.Logger;

import consistency.XmlParser;

public class NotDryParser {
	
	private final static Logger _log = Logger.getLogger(NotDryParser.class.getName());
	
	/**
	 * Process the XML file
	 * @param filename
	 * @return
	 */
	public boolean parseXml(String filename) {

		if(filename == null || filename.isEmpty()) {
			return false;
		}
		
		boolean result = false;
		try {
			BufferedReader br = new BufferedReader(new FileReader(filename));
			String line;
			while ( (line = br.readLine()) != null) {
					
				// extract the xml element tag
				// extract the xml element data
				// process element data.
				
		        line = br.readLine();
		    }
			
			result = true;
		} 
		catch(IOException e) {
			_log.error("Problem with IO. " + e.getMessage(), e);
		}
		catch(Exception e) {
			_log.error("Unexpected exception. Detail:  " + e.getMessage(), e);
		}

		return result;
	}
	
	/**
	 * process the CSV file
	 * @param filename
	 * @return
	 */
	public boolean parseCsv(String filename) {

		if(filename == null || filename.isEmpty()) {
			return false;
		}
		
		boolean result = false;
		try {
			BufferedReader br = new BufferedReader(new FileReader(filename));
			String line;
			while ( (line = br.readLine()) != null) {
					
				// split the line along the ,
				// process each elements in the CSV.
				
		        line = br.readLine();
		    }
			
			result = true;
		} 
		catch(IOException e) {
			_log.error("Problem with IO. " + e.getMessage(), e);
		}
		catch(Exception e) {
			_log.error("Unexpected exception. Detail:  " + e.getMessage(), e);
		}

		return result;
	}
}
