/* JavaScript for the portfolio website */

/**
 * Opens the sidebar navigation menu and shows the overlay.
 */
function openNav() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

/**
 * Closes the sidebar navigation menu and hides the overlay.
 */
function closeNav() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}

/**
 * Adds smooth scrolling behavior to all anchor links that point to an ID.
 * This allows for smooth navigation on the single-page layout.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent the default anchor click behavior
        e.preventDefault();
        
        // Scroll to the element specified in the href
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * Allows the user to edit a social media link directly on the page.
 * @param {string} id - The ID of the anchor tag element to edit.
 * @param {string} baseUrl - The base URL for the social media link (e.g., "https://wa.me/").
 */
function editLink(id, baseUrl) {
    const linkElement = document.getElementById(id);
    if (!linkElement) {
        console.error(`Element with ID "${id}" not found.`);
        return;
    }
    
    // Extract the current username/handle from the href
    const currentUrl = linkElement.href;
    const currentUsername = currentUrl.replace(baseUrl, '');
    
    // Prompt the user for the new username
    const linkType = id.split('-')[0]; // e.g., "whatsapp"
    const newUsername = prompt(`Enter new username/handle for ${linkType}:`, currentUsername);

    // If the user entered a new username, update the link's href
    if (newUsername !== null && newUsername.trim() !== '') {
        linkElement.href = baseUrl + newUsername.trim();
    }
}