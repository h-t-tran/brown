package readability;

public class moreReadable {
	
	static class Coordinate { 
		public double latitudeDegree;
		public double longitudeDegree; 
	}
	
	/**
	 * this class abstract the creation and drawing of the 2D map 
	 * using an acme library.
	 * 
	 * @return distance between 2 coordinates in degree unit.
	 */
	static class Map {
		public static double calculateDistance(Coordinate from, Coordinate to) {
			
			double distanceXDegree = Math.abs(from.latitudeDegree - to.latitudeDegree);
			double distanceYDegree = Math.abs(from.longitudeDegree - to.longitudeDegree);
			
			return Math.sqrt( (distanceXDegree * distanceXDegree) +
							  (distanceYDegree * distanceYDegree));
		}
	}
}

