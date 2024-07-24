document.getElementById('closeButton').addEventListener('click', function() {
    var buttonImage = document.getElementById('buttonImage');
    buttonImage.src = 'button pressed.png';
    setTimeout(function() 
        buttonImage.src = 'button.png';
        setTimeout(function() {

            window.close();
        }, 50);
    }, 150);
});
