function calculateDistance(posX, posY) {
  /*
   * Function to find the distance in metres between the shot location and the center point of the goal line.
   */
  const midGoalX = 0.0;
  const midGoalY = 34.0;
  const goalCoordinates = [midGoalX, midGoalY];
  const shotCoordinates = [posX, posY];
  const distance = Math.hypot(
    shotCoordinates[0] - goalCoordinates[0],
    shotCoordinates[1] - goalCoordinates[1]
  );
  return distance;
};

function calculateAngle(posX, posY) {
  /*
   * Function to calculate the angle in degrees between the shot location and the center point of the goal line.
   */
  const deltaY = Math.pow(posY - 34.0, 2);
  const deltaX = Math.pow(posX - 0.0, 2);
  const radian = Math.atan2(deltaY, deltaX);
  const degrees = radian * (180 / Math.PI);
  return degrees;
};

function distanceAnglexG(pos_x, pos_y) {
    let distance = calculateDistance(pos_x, pos_y);
    let angle = calculateAngle(pos_x, pos_y);
    console.log(distance, angle);
    const p = 1 / (1 + Math.exp(-(0.2204 - 0.0281 * pos_x - 0.0062 * pos_y - 0.0998 * distance - 0.0081 * angle)));
    return p;
};

function moveCircle(x, y, svg, paramArray) {
    // Move circle
    svg.select(".shot-circle")
            .transition()
            .attr("cx", x)
            .attr("cy", y);
};

pitchSvg.on('click', function() {
    // update position
    var coords = d3.mouse(this),
        x = coords[0],
        y = coords[1],
        paramArray = getParams(),
        xG = getXG(x, y, paramArray)[1].toFixed(0);
    printXG(xG, pitchSvg);
    moveCircle(x, y, pitchSvg, paramArray);
  });