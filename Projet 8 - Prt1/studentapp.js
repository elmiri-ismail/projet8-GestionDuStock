$(document).ready(function () {
  var studentsList;
  function getall() {
    $(".exproduitList").html(" ");
    $.ajax({
      url: "/api/getStudents.php",
      method: "GET",
      success: function (data) {
        studentsList = JSON.parse(data);
        console.log(studentsList);
        for (var i = 0; i < studentsList.length; i++) {
          $(".studentsList").append('<li><h2>' + "id: " + studentsList[i]["id"] + '</h2><h3>' + "prix: " + studentsList[i]["prix"] + '</h3><h4>' + "libellé: " + studentsList[i]["libellé"]);
        }
      }
    })
  }
  getall();
})
