
        const sparkleContainer = document.getElementById("sparkle-container");
        const isMobile = window.innerWidth < 600;

        function startSparkles() {
            const sparkleCount = isMobile ? 40 : 90;

            for (let i = 0; i < sparkleCount; i++) {
                createSparkle();
            }
        }

        function createSparkle() {
            const sparkle = document.createElement("div");
            sparkle.classList.add("sparkle");

            sparkle.style.left = Math.random() * 100 + "vw";
            sparkle.style.animationDuration = 4 + Math.random() * 4 + "s";
            sparkle.style.opacity = Math.random();

            sparkleContainer.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 8000);
        }
    
