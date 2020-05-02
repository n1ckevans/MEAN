$(document).ready(function(){


  $("#get-name").click(function () {

    const $name = $("#user");

    $.get("https://api.github.com/users/n1ckevans", function(data){
      username = data.name;
      $name.append(`<h2>${username}</h2>`)
  });

      
    });   
  });

 