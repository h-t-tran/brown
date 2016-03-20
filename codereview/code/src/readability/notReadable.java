package readability;

public class notReadable {
	
	static class ll { public double x, y; }
	
	/**
	 *this class abstract the creation and drawing of the 2D map 
	 *using an acme library.
	 *@return distance between 2 coordinates in degree unit.
	 */
	static class map {
		public static double cal_culateDistance(ll x, ll y) {
			return Math.sqrt(Math.abs(x.x-y.x)*Math.abs(x.x-y.x)+Math.abs(x.y-y.y)*Math.abs(x.y-y.y));
		}
	}
}

