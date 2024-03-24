//Write a program that takes as input the speed of a car e.g 80.
// If the speed is less than 70, it should print “Ok”.
// Otherwise, for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the total number of demerit points.


function calculateDemeritPoints(speed) {
    // Validate input
    if (speed <= 0) {
      return "Invalid speed. Please enter a positive number.";
    }
  
    const speedLimit = 70;
    let demeritPoints = 0;
  
    // Calculate demerit points based on speed exceeding limit
    if (speed > speedLimit) {
      const excessSpeed = speed - speedLimit;
      demeritPoints = Math.floor(excessSpeed / 5); // Round down for points
    }
  
    // Print result
    if (demeritPoints === 0) {
      return "Ok";
    } else {
      return `Demerit points: ${demeritPoints}`;
    }
  }
  
  // Example usage
  const carSpeed = 80;
  const result = calculateDemeritPoints(carSpeed);
  console.log(result); // Output: Demerit points: 2