document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Quote carousel
        let currentQuote = 0;
        const quotes = document.querySelectorAll('.quote-item');
        
        function showNextQuote() {
            quotes[currentQuote].classList.remove('active');
            currentQuote = (currentQuote + 1) % quotes.length;
            quotes[currentQuote].classList.add('active');
        }
        
        setInterval(showNextQuote, 4000);

        // Video play function
        function playVideo(videoId) {
            alert(`Playing video: ${videoId}\n\nIn a real implementation, this would open the video player with the selected content.`);
        }

        // Parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.parallax');
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        });

        // Animate cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = Math.random() * 0.5 + 's';
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.leader-card, .video-card').forEach(card => {
            observer.observe(card);
        });

        // Add floating animation to hero elements
        setInterval(() => {
            const heroContent = document.querySelector('.hero-content');
            heroContent.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`;
        }, 16);