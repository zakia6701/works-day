//saving the save button
const saveBtn = $('.saveBtn')
//loading DOM and setting the current date using dayjs
$(document).ready(function() {
  var date = dayjs().format("dddd MMMM D")
  $("#currentDay").text(date)
//getting time and matching with current time
  var currentHour = dayjs().hour()
  var timeBlock = $('.time-block')
  timeBlock.each(function() {
    var hourId = $(this).attr("id")
    if(hourId === currentHour) {//looping thru the timeblocks
      $(this).attr("class", "row time-block present")
    } else if (hourId < currentHour) {
      $(this).attr("class", "row time-block past")
    }
  })

  //saving the input of the user to localstorage
  saveBtn.on("click", function(event) {
    event.preventDefault()
    var value = $(this).siblings(".col-8").val().replace(key)
    var key = $(this).parent().attr("id")
    
    localStorage.setItem(key, JSON.stringify(value))
  })
  for(let i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
  }
});
