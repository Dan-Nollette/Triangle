var ifTriangle = function(side1, side2, side3){
  var add12 = side1 + side2;
  var add23 = side2 + side3;
  var add31 = side3 + side1;
  if((add12 > side3) && (add23 > side1) && (add31 > side2)){
    return true;
  }
  else return false;
}

var triangleEval = function (side1, side2, side3) {
  if ((side1 + side2 <= side3) && (side2 + side3 <= side1) && (side1 + side3 > side2)) {
    return "That is not a triangle";
  }
  if(side1 === side2 && side1 === side3) {
    return "The triangle is equilateral.";
  } else if ( side1 === side2 || side1 === side3 || side2 === side3) {
    return "The triangle is Isosceles."
  } else {
    return "The triangle is Scalene.";
  }

}




$(document).ready(function(){
  $("#triangleForm").submit(function(event){
    alert("first");
    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();
    side1 = parseInt(side1);
    side2 = parseInt(side2);
    side3 = parseInt(side3);

    alert(triangleEval(side1, side2, side3));
    $("#triangleType").text(triangleEval(side1, side2, side3));
    $("#result").show();
    //alert("hey");
      //  alert(ifTriangle(side1, side2, side3));


    (event).preventDefault();
  });
});
