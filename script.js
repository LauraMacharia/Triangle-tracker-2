function triangleTracker() {
    var base = parseInt(document.getElementById('base').value);
    var height = parseInt(document.getElementById('height').value);
    var hypotenuse = parseInt(document.getElementById('hypotenuse').value);
     if (base === height && base === hypotenuse && height === hypotenuse){
     alert("equilateral");
     }
  else if ( base !== height && height !== hypotenuse && hypotenuse !== base) {
    alert("scalene");
  }
  else if ( base == height || height ===hypotenuse || height ===hypotenuse) {
    alert("isosceles");
  }
  else ( alert("this is not a triangle"));
  }
  