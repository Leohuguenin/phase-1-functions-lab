    function distanceFromHqInBlocks(pickUpLoc) {
        const headQuarter = 42;
        if (pickUpLoc > headQuarter) {
          return pickUpLoc - headQuarter;
        } else {
          return headQuarter - pickUpLoc;
        }
      }
    
      function distanceFromHqInFeet(pickUpLoc) {
        const oneBlock = 264;
        return distanceFromHqInBlocks(pickUpLoc) * oneBlock;
      }

    function distanceTravelledInFeet(start, destination) {
        if ((start - destination) > 0) {
            return (start - destination) * 264;
        } else { 
            return (destination - start) * 264;
        }
    }

    function calculatesFarePrice(start, destination) {
        const distanceInFeet = distanceTravelledInFeet(start, destination);
        if (distanceInFeet < 400) {
            return distanceInFeet * 0;
        } else if (distanceInFeet >  400 && distanceInFeet < 2000) {
            return (distanceInFeet - 400) * 0.02;
        } else if (distanceInFeet >  2000 && distanceInFeet < 2500) {
            return 25; 
        } else {
            return 'cannot travel that far' 
        }
        }
 