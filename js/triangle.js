
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

var tri = function(triangle) {
  var s = ((triangle.sideA + triangle.sideB + triangle.sideC)/2);
  return Math.sqrt(s*(s-triangle.sideA)*(s-triangle.sideB)*(s-triangle.sideC));
};

  alert(tri(triangle));
