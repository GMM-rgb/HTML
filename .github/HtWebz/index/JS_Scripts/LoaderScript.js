document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is running");
});
document.addEventListener("DOMContentLoaded", function() {
            var dots = document.getElementById("dots");
            var dotCount = 3;
            var dotInterval = setInterval(function() {
                if (dotCount === 3) {
                    dots.innerHTML = '';
                    dotCount = 0;
                } else {
                    dots.innerHTML += '.';
                    dotCount++;
                }
            }, 500);

            // Simulate loading process and transition to the index page
            setTimeout(function() {
                clearInterval(dotInterval);
                window.location.href = 'index/index.html';
            }, 3500); // Time Duration
        });
