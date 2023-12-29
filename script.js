document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    let popoutWindowLink = document.getElementById('popoutWindow');
    let overlay = document.querySelector('.overlay');
    let popup = document.querySelector('.popup');
    let closeBtn = document.querySelector('.close-btn');

    // Show the popup window when the link is clicked
    popoutWindowLink.addEventListener('click', function (event) {
        event.preventDefault();
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });

    // Close the popup window when the close button is clicked
    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });

    // Close the popup window when the overlay is clicked
    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
});

//Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

//loop through the "stars" NodeList
stars.forEach((star, index1) => {
    //Add an event listener that runs a function when the "click event is triggered"
    star.addEventListener("click",() =>{
        //loop through the "stars" NodeList Again
        stars.forEach((star, index2) =>{
            //Add the "active" class to the clicked star and any stars with a lower index
            //and remove the "active" class from any stars with a higher index
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});