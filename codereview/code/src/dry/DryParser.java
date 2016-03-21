package dry;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.apache.log4j.Logger;

import consistency.XmlParser;

public class DryParser {
	
	private final static Logger _log = Logger.getLogger(DryParser.class.getName());
	
	interface ParseHandler {
		void processLine(String str);
	}
	
	public boolean parseFile(String filename, ParseHandler handler) {

		if(filename == null || filename.isEmpty() || handler == null) {
			return false;
		}
		
		boolean result = false;
		try {
			BufferedReader br = new BufferedReader(new FileReader(filename));
			String line;
			while ( (line = br.readLine()) != null) {
				handler.processLine(line);
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
	
	public static void main(String[] args) {
		DryParser xmlParser = new DryParser();		
		xmlParser.parseFile("myxml.txt", (s) -> {
			// extract the xml element tag
			// extract the xml element data
			// process element data.			
		});
		
		DryParser csvParser = new DryParser();		
		csvParser.parseFile("mycsv.txt", (s) -> {
			// split the line along the ,
			// process each elements in the CSV.						
		});
	}
}
