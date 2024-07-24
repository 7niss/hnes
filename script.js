document.getElementById('closeButton').addEventListener('click', function() {
    var buttonImage = document.getElementById('buttonImage');

    // Change the image source to 'button pressed.png'
    buttonImage.src = 'button pressed.png';

    // Wait for 150 milliseconds
    setTimeout(function() {
        // Change the image source back to 'button.png'
        buttonImage.src = 'button.png';

        // Wait for a short moment before closing the tab to ensure the image is reverted
        setTimeout(function() {
            // Close the tab
            window.close();
        }, 50);
    }, 150);
});