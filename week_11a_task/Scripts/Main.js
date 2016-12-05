var CurrentIndex = 1;
var Max = 3;
var Min = 1;
var ImageFolder = 'Images/';
var Extension = '.jpg';

$(document).ready(function(){
   console.log('page has loaded');

    $('#Right').click(function(e) {
        alert("Right button has been clicked")
        $('#Carousel').attr('src', 'Images/image_2.jpg')
    })
    
    $('#Left').click(function(e) {
        alert(" Left Button HAs Been Clicked")
        $('#Carousel').attr('src', 'Images/image_3.jpg')
    })

});
