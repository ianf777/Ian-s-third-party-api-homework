const today = moment().format('dddd MMMM DD')
      console.log(today) //"September 11th 2020"
$('.currentDate').append(today)
$("#saveBtn1").on("click", function() {
    // get nearby values
    localStorage.setItem('input1', 'input1')
    var value = (saveBtn1);
    var time = (saveBtn1);
    // save in localStorage
    localStorage.setItem(time, value);
  });