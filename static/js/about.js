$(document).ready(function(){
  BuildTable(people);
});

function SubmitForm(event){
  var data  = {};
  var valid = true;

  // Go through each input tag
  $("input").each(function(){
    // Execute this statement if there is nothing in an input field
    if(!$(this).val().trim()){
      // Mark this form submission as no longer valid
      valid = false;

      // If the element isn't animated, animate a glowing red border over the invalid field
      if(!$(this).is(":animated")){
        $(this).animate({
          "border-color": "red"
        }, 500, "easeInQuad", function(){
          $(this).animate({
            "border-color": "transparent"
          }, 500, "easeOutQuad");
        });
      }
    }

    // Record the value of the input into our data
    data[$(this).attr("name")] = $(this).val();
  });

  // Send POST data to the server if all data is valid
  if(valid){
    $.post("add-person", data, function(data){
      BuildTable(data);
    }, "json");
  }
}

function BuildTable(data){
  // Initialize html
  var html = "<tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>";

  // Build the table using data from each object
  $(data).each(function(i){
    html += "<tr><td>" + this.firstName + "</td><td>" + this.lastName + "</td><td>" + this.age + "</td></tr>";
  });

  // Update the results table
  $("#results").html(html);
}
