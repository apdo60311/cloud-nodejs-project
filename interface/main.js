$.ajax({
  type: "GET",
  url: "http://localhost:3000/students",
  mime: "application/json",
  dataType: "json", //to parse string into JSON object,
  success: function (data) {
    if (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        $("#table tbody").append(
          "<tr><td>" +
            data[i].id +
            "</td><td>" +
            data[i].name +
            "</td><td>" +
            data[i].cgpa +
            "</td></tr>"
        );
      }
    }
  },
  error: function (jqXHR, textStatus, errorThrown) {
    alert("error: " + textStatus + ": " + errorThrown);
  },
});
