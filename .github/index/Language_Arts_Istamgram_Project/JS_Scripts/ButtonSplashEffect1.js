function createSplash(event) {
            const button = event.currentTarget;
            const splash = document.createElement('span');
            splash.className = 'splash';
//Bounds for splash effect
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            splash.style.width = size + 'px';
            splash.style.height = size + 'px';
//Set Bounds with size of 2px inwards/outwards
            const x = event.clientX - rect.left - (size / 2);
            const y = event.clientY - rect.top - (size / 2);
            splash.style.left = `${x}px`;
            splash.style.top = `${y}px`;
//Append to button
            button.appendChild(splash);
            //Event listener for when the animation needs to end
            splash.addEventListener('animationend', () => {
                splash.remove();
            });
        }
