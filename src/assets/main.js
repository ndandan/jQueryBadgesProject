$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/ndandan13.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      response.courses.completed.map((x)=> $( "#badges" ).append( "<div class='course' ><h3>" + x.title + "</h3><img src=" + x.badge + " alt='badge of course'><a target='_blank' class='btn btn-primary' href=" + x.url + ">See Course</a></div>" ))
    }
  });

});
