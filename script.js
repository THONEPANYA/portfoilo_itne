        // Typing animation
        const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');

        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(typeText, speed);
        }

        // Scroll animations
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });

            // Animate skill bars
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const barTop = bar.getBoundingClientRect().top;
                if (barTop < window.innerHeight - 150) {
                    bar.classList.add('animate');
                }
            });
        }

        // Scroll progress indicator
        function updateScrollIndicator() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            document.getElementById('scrollIndicator').style.width = scrollPercent + '%';
        }

        // Smooth scroll to section
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation and success message
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '#d1d5db';
                }
            });
            
            if (isValid) {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Navigation links smooth scroll
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
        });

        // Initialize animations
        window.addEventListener('scroll', () => {
            animateOnScroll();
            updateScrollIndicator();
        });

        window.addEventListener('load', () => {
            typeText();
            animateOnScroll();
        });

        // Mobile menu toggle (basic implementation)
        document.getElementById('menuToggle').addEventListener('click', function() {
            alert('Mobile menu would open here in a full implementation!');
        });