     // Counter Animation
     document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // Adjust this value to control the speed of the counter animation

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };

            const handleScroll = () => {
                const rect = counter.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    updateCount();
                    window.removeEventListener('scroll', handleScroll);
                }
            };

            window.addEventListener('scroll', handleScroll);
        });
    });