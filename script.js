function triangleTracker() {
    var base = parseInt(document.getElementById('base').value);
    var height = parseInt(document.getElementById('height').value);
    var hypotenuse = parseInt(document.getElementById('hypotenuse').value);

     if (base<=0 || height<=0 || hypotenuse<=0){
     alert("Enter positive numbers");
     }
  else if (base + height <= hypotenuse || height + hypotenuse <= base || base + hypotenuse <= height) {
    alert("NOT  a triangle");
  }
  else if (base + height <= hypotenuse || height + hypotenuse <= base || base + hypotenuse <= height) {
    alert("NOT  a triangle");
  }
  else if (isNaN(base) || isNaN(height) || isNaN(hypotenuse)){
    alert("Oops please input values");
  }
  else if (base === height && base === hypotenuse){
    alert("Equilateral");
  }
  else if (base === height || base === hypotenuse || height === hypotenuse){
    alert("Isosceles");
  }

  else ( alert("Scalene"));
  }
  