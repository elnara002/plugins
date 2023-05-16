$(document).ready(function() {
  $("button").click(function() {
          $("ul").append("<li>" + $('#addList').val() + "</li>");
          $('#addList').val('');
      
  });

  $("#searchList").keyup(function() {
      var search = $(this).val().toLowerCase();
      $("ul li").each(function() {
          var listText = $(this).text().toLowerCase();
          if (listText.includes(search)) {
              $(this).show();
          } else {
              $(this).hide();
          }
      });
  });
});







