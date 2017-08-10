var triangleEval = function (side1, side2, side3) {
  if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
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
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    $("#triangleType").text(triangleEval(side1, side2, side3));
    $("#result").show();
    (event).preventDefault();
  });
});
