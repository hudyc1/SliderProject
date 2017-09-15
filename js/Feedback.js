/*
here's the JavaScript to 
convert form input from a number into an integer; change that integer into a string; and define a switch with 5 options; and plug that string into the response ID.
*/
  
    function feedback() {
      //Get the value from the range slider.
      var num = parseInt(document.getElementById("rating").value)
      //Declare msg variable as string.
      var msg = ""
      switch (num) {
        case 1:
          msg = "We are sorry you were unsatisfied with our service. We would like to get feedback on how we can improve our services. Please click <a href='http://www.feedback.html'>here</a> to connect with a service representative."
          break;
        case 2:
          msg = "We are sorry you did not have a great experience. We want all of our customers to have five star service. Please let us know how we can better your experience. Please click <a href='http://www.feedback.html'>here</a> to connect with a service representative."
          break;
        case 3:
          msg = "Thank you for your feedback! We would like to know how we can give you a five star experience next time. Please click <a href='http://www.feedback.html'>here</a> to connect with a service representative."
          break;
        case 4:
          msg = "We are so happy that you had an great experience! Please post and tell us about your experience. <a href='https://www.yelp.com/writeareview'> review</a> us at YELP."
          break;
		case 5:
          msg = "We are so happy that you had an great experience! Please post and tell us about your experience. <a href='https://www.yelp.com/writeareview'> review</a> us at YELP."
          break;
        default:
          msg = "Please enter a number value (for example: 1, not one) between 1 and 5.";
      }
      //Find and populate result paragraph.
      document.getElementById("response").innerHTML = msg;
    }

 function ratings() {
      //Get the value from the range slider.
      var num = parseInt(document.getElementById("rating").value)
      //Declare rating variable as string.
      var rating = "";
      switch (num) {
        case 1:
              rating = "Poor"
           break;
        case 2:
              rating = "Fair"
           break;
        case 3:
               rating = "Good"
         break;
        case 4:
               rating = "Great"
           break;
		case 5:
               rating = "Excellent"
         break;
        default:
          rating = "Please rate your experience!";
      }
      //Find and populate result paragraph.
        document.getElementById("selection").innerHTML = rating;
        }