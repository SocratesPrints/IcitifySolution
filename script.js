function openNav() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

function closeNav() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        
        e.preventDefault();
        
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function editLink(id, baseUrl) {
    const linkElement = document.getElementById(id);
    if (!linkElement) {
        console.error(`Element with ID "${id}" not found.`);
        return;
    }
    
   
    const currentUrl = linkElement.href;
    const currentUsername = currentUrl.replace(baseUrl, '');
    
    const linkType = id.split('-')[0]; 
    const newUsername = prompt(`Enter new username/handle for ${linkType}:`, currentUsername);

    
    if (newUsername !== null && newUsername.trim() !== '') {
        linkElement.href = baseUrl + newUsername.trim();
    }
}