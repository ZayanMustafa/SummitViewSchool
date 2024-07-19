 // Initialize AOS for animations
 AOS.init();
        
 // Toggle mobile menu
 function toggleMobileMenu() {
     var mobileMenu = document.getElementById('mobileMenu');
     mobileMenu.classList.toggle('hidden');
 }
//  <!-- Include AOS JavaScript if not already included -->
{/* <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script> */}

//  Initialize AOS -->
    AOS.init();

//  Counter Animation Script 
    document.addEventListener('DOMContentLoaded', function () {
        const counters = document.querySelectorAll('[data-count]');
        
        function animateCounter(counter) {
            const countTo = parseInt(counter.getAttribute('data-count'), 10);
            counter.textContent = countTo;
        }
        
        function checkCountersInView() {
            counters.forEach(counter => {
                const rect = counter.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    animateCounter(counter);
                }
            });
        }
        
        window.addEventListener('scroll', checkCountersInView);
        checkCountersInView(); // Trigger on page load
    });
