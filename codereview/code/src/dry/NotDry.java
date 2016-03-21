package dry;

 class NotDry {
	
	static class Map {
		
		public double distanceMiles(Coordinate from, Coordinate to) {
			double distDeg = calculateDistance(from, to);
			
			// (1) what is 7926? and it is repeated more than once.
			return distDeg * 7926 / 360.0;			
			
		}
		
		public double getEarthCircumferenceMiles() {
			// (2)
			return 7926 * 2 / Math.PI;
		};
		
		public static double calculateDistance(Coordinate from, Coordinate to) {
			
			double distanceXDegree = Math.abs(from.latitudeDegree - to.latitudeDegree);
			double distanceYDegree = Math.abs(from.longitudeDegree - to.longitudeDegree);
			return Math.sqrt( (distanceXDegree * distanceXDegree) +
							  (distanceYDegree * distanceYDegree));
		}
	}
	
	static class Coordinate { 
		public double latitudeDegree;
		public double longitudeDegree; 
	}
}
