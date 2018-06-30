// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, size, width, color;
$('#sizePicker').submit(function (Event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);
})
function makeGrid(columns, rows,) {
// Your code goes here!
$('tr').remove();
for(var i=1; i<= columns; i++){
  $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
  for(var j=1; j<= rows; j++){
    $('#table' + i).append('<td></td>');
  }
}
//Adding colors
$('td').click(function addColor(){
  color = $('#colorPicker').val();

  if ($(this).attr('style')){
    $(this).removeAttr('style')
  }else{
    $(this).attr('style', "background-color:" + color);
  }
})
}
