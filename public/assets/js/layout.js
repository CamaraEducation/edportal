// Get the current URL path
const currentUrl = window.location.pathname;
const links = document.querySelectorAll('.pc-link');

function setActiveRecursive(element) {
    if (element && element.classList.contains('pc-item')) {
        element.classList.add('active');
        const parent = element.closest('.pc-submenu')?.closest('.pc-item');
        setActiveRecursive(parent);
    }
}

function isSmallScreen() {
    return window.innerWidth < 1026 || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent));
}

//if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)) {
if (isSmallScreen()) {
    localStorage.setItem('layout', 'vertical');
}else{
    localStorage.setItem('layout', 'compact');
    document.addEventListener("DOMContentLoaded", function() {
    
        // Find all 'pc-link' elements
        links.forEach(function(link) {
            // Check if the href matches the current URL
            if (link.getAttribute('href') === currentUrl) {
                const pcItem = link.closest('.pc-item');
                setTimeout(() => {
                    setActiveRecursive(pcItem);
                }, 500);
            }
        });
    });
    
}