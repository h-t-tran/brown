package testable;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestableTest {

	class AjaxMock implements Testable.AjaxInterface {
		@Override
		public int invoke(String url, StringBuffer response) {
			// TODO Auto-generated method stub
			return 0;
		}		
	}

	class LogMock implements Testable.LoggeableInterface {

		@Override
		public void error(String msg, Throwable t) {
			errMsg = msg;
		}

		@Override
		public void error(String msg) {
			errMsg = msg;
		}
		
		public String errMsg;
	}
	
	@Test
	public void invokeAjaxShouldReturnTrue() {
		
		//
		// Arrange
		//
		Testable t = new Testable();
		AjaxMock ajax = new AjaxMock();
		LogMock logger = new LogMock();
		
		//
		// Act
		//
		boolean result = t.invokeAjax("www.google.com", ajax, logger);
		
		//
		// Assert
		//
		assertTrue(result);

	}
	
	@Test
	public void invokeAjaxShouldLogErrorOnException() {
		
		//
		// Arrange
		//
		Testable t = new Testable();
		
		AjaxMock ajax = new AjaxMock();
		// TODO: setup ajax object to throw exception. 
		
		LogMock logger = new LogMock();
		
		//
		// Act
		//
		t.invokeAjax("www.google.com", ajax, logger);
		
		//
		// Assert
		//
		assertTrue(logger.errMsg.contains("Fatal transport error"));
	}

}
