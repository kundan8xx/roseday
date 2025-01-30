// Create falling rose petals
function createPetals() {
    const petalsContainer = document.querySelector('.falling-petals');
    const numberOfPetals = 30;

    for (let i = 0; i < numberOfPetals; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Random properties for each petal
        const size = Math.random() * 15 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
        petal.style.animationDelay = `${Math.random() * 2}s`;
        petal.style.opacity = Math.random() * 0.6 + 0.4;
        
        petalsContainer.appendChild(petal);
    }
}

// Enhanced surprise modal functionality
const surpriseBtn = document.getElementById('surpriseBtn');
const surprise = document.getElementById('surprise');

function createHeartExplosion() {
    const modal = document.querySelector('.modal-content');
    const colors = ['#ff1493', '#ff69b4', '#ffb7c5', '#ff477e'];
    
    // Create multiple hearts with different sizes and colors
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        
        // Random properties
        const size = Math.random() * 30 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = Math.random() * 3 + 2;
        
        heart.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${left}%;
            animation: floatHeart ${duration}s ease-in-out ${delay}s infinite;
        `;
        
        modal.appendChild(heart);
    }
}

function createSparkles() {
    const modal = document.querySelector('.modal-content');
    
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        
        sparkle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            animation-delay: ${delay}s;
        `;
        
        modal.appendChild(sparkle);
    }
}

function showLoveMessage() {
    const messages = [
        "You are my everything ❤️",
        "Every day with you is a gift 🌹",
        "You make my life complete 💑",
        "Forever yours 💖",
        "My love for you grows stronger each day 💝"
    ];
    
    const modal = document.querySelector('.modal-content');
    const messageElement = document.createElement('div');
    messageElement.className = 'love-message';
    
    let currentMessage = 0;
    messageElement.textContent = messages[currentMessage];
    
    setInterval(() => {
        currentMessage = (currentMessage + 1) % messages.length;
        messageElement.style.opacity = 0;
        
        setTimeout(() => {
            messageElement.textContent = messages[currentMessage];
            messageElement.style.opacity = 1;
        }, 500);
    }, 3000);
    
    modal.appendChild(messageElement);
}

// Add CSS for new animations
const style = document.createElement('style');
style.textContent = `
    .surprise-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .surprise-modal.active {
        opacity: 1;
    }

    .modal-content {
        background: rgba(255, 255, 255, 0.95);
        padding: 3rem;
        border-radius: 20px;
        text-align: center;
        position: relative;
        overflow: hidden;
        max-width: 90%;
        width: 500px;
        animation: modalPop 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }

    .floating-heart {
        position: absolute;
        transform: translate(-50%, -50%);
        clip-path: path('M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181');
    }

    .sparkle {
        position: absolute;
        background: white;
        border-radius: 50%;
        animation: sparkleFloat 2s ease-in-out infinite;
    }

    .love-message {
        font-size: 1.5rem;
        color: #ff1493;
        margin-top: 2rem;
        transition: opacity 0.5s ease;
        font-family: 'Dancing Script', cursive;
    }

    @keyframes modalPop {
        0% { transform: scale(0.5); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }

    @keyframes floatHeart {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -80px) scale(1.2); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }

    @keyframes sparkleFloat {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
`;

document.head.appendChild(style);

// Event Listeners
surpriseBtn.addEventListener('click', () => {
    surprise.style.display = 'flex';
    setTimeout(() => {
        surprise.classList.add('active');
        createHeartExplosion();
        createSparkles();
        showLoveMessage();
    }, 10);
});

surprise.addEventListener('click', (e) => {
    if (e.target === surprise) {
        surprise.classList.remove('active');
        setTimeout(() => {
            surprise.style.display = 'none';
            // Clean up animations
            const modal = document.querySelector('.modal-content');
            modal.innerHTML = '<h3>I Love You!</h3>';
        }, 300);
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createPetals();
});

// Photo gallery animation
const photos = document.querySelectorAll('.photo');
photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
        photo.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    photo.addEventListener('mouseout', () => {
        photo.querySelector('img').style.transform = 'scale(1)';
    });
}); 