const subtitles = document.querySelectorAll('#subTitles p');

    // Function to handle click events
    function redirectToPage(event) {
        const pageTitle = event.target.id; // Get the ID of the clicked <p> tag
        window.location.href = `/html/${pageTitle}.html`; // Redirect to pageTitle.html
    }

    // Add click event listeners to each <p> tag
    subtitles.forEach(subtitle => {
        subtitle.addEventListener('click', redirectToPage);
    });