$(document).ready(function () {
    var exproduitList,
    myTable = document.querySelector('.exproduitList');

    function getall() {
    myTable.innerHTML = "";
        $.ajax({
            url: "api/getExtincteur.php",
            method: "GET",
            success: function (data) {
                myTable.innerHTML = `<tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Type</th>
            <th>Prix</th>
            </tr>`
                console.log(data);
                exproduitList = JSON.parse(data);
                for (var i = 0; i < exproduitList.length; i++) {
                    myTable.innerHTML += `<tr idoftr='${exproduitList[i]["id"]}'>
                <td>${exproduitList[i]["id"]}</td>
                <td>${exproduitList[i]["titre"]}</td>
                <td>${exproduitList[i]["type"]}</td>
                <td>${exproduitList[i]["prix"]}</td>
                <td>
                </tr>`;

                }

                delet()
                edit()
            }
        })
    }
    
    getall();
})