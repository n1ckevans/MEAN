$(document).ready(function () {

  $.ajax({
    url: "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium",
    success: successHandler
  });

  function successHandler(triviaData) {
    const $questions = $("#questions");

    for (const key in triviaData) {
      if (key === "results")
        for (let i = 0; i < key.length; i++)
          $questions.append(`<h3 class="text-primary">${triviaData[key][i].question}</h3><h4> Select your choice: ${triviaData[key][i].correct_answer}, ${triviaData[key][i].incorrect_answers}</h4>`);


    }
  }

});


