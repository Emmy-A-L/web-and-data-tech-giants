

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}



document.addEventListener("DOMContentLoaded", function() {
    const heading = "Empowering Your Vision with Elite Tech Talent";
    const animatedHeading = document.getElementById("animated-heading");
    let index = 0;

    function typeHeading() {
        if (index < heading.length) {
            animatedHeading.innerHTML += heading.charAt(index);
            index++;
            setTimeout(typeHeading, 100); // Speed of typing (100ms per letter)
        } else {
            // Wait 5 minutes and reset
            setTimeout(() => {
                animatedHeading.innerHTML = ""; // Clear the heading
                index = 0; // Reset index
                typeHeading(); // Restart typing animation
            }, 300000); // 5 minutes = 300,000ms
        }
    }

    typeHeading(); // Start the typing animation
});


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-form");
    const formElement = document.getElementById("join-form");

    // Toggle form visibility on button click
    toggleButton.addEventListener("click", function() {
        // Check if the form is currently displayed
        if (formElement.style.display === "none") {
            // Show the form
            formElement.style.display = "block";
            // Change button text to "Hide Form"
            toggleButton.textContent = "Hide Form";
        } else {
            // Hide the form
            formElement.style.display = "none";
            // Change button text back to "Apply Now"
            toggleButton.textContent = "Apply Now";
        }
    });
});



    
/*document.addEventListener("DOMContentLoaded", function() {
    const text = "Empowering Your Vision with Elite Tech Talent";
    const animateHeading = document.getElementById('animated-heading');

    
    // Clear the heading element initially
    headingElement.innerHTML = "";

    // Split text into individual characters
    const letters = text.split("");

    // Function to shuffle array (Fisher-Yates Shuffle Algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to animate the letters
    function animateHeading() {
        headingElement.innerHTML = ""; // Clear existing text

        // Create an array of indices
        let indices = Array.from(Array(letters.length).keys());
        
        // Shuffle the indices to make the letters appear in random order
        let shuffledIndices = shuffleArray(indices);

        // Keep track of how many letters have been added
        let lettersShown = new Set();

        shuffledIndices.forEach((index, i) => {
            // Use setTimeout to delay each letter's appearance
            setTimeout(() => {
                if (!lettersShown.has(index)) {
                    headingElement.innerHTML += letters[index];
                    lettersShown.add(index); // Track which letters have been shown
                }
            }, i * 150); // Adjust the timing to control animation speed
        });
    }

    // Call the animation function
    animateHeading();

    // Repeat the animation every 5 minutes (300,000 ms)
    setInterval(animateHeading, 300000); // 300000 ms = 5 minutes
}); */

    
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.join-form').scrollIntoView({ behavior: 'smooth' });
});

