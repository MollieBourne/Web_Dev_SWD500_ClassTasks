var CurrentIndex = 1;
var Max = 3;
var Min = 1;
var ImageFolder = 'Images/';
var Extension = '.jpg';

$(document).ready(function(){
   console.log('page has loaded');

    $('#Right').click(function(e) {
        alert("Right button has been clicked")
    })

});

  $('#Click_Me').click(function(e){
    
    alert("button has been clicked")
    $('#img').attr('src, 'img/fox.jpg')
    
});