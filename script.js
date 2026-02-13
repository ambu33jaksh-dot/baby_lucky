// Romantic and Funny Quotes
const quotes = [
    "If I had a flower for every time I thought of you, I could walk in my garden forever. - Alfred Tennyson",
    "You are my today and all of my tomorrows. - Leo Christopher",
    "I love you more than coffee, but please don't make me prove it.",
    "You're the peanut butter to my jelly, the cheese to my macaroni, and the love of my life.",
    "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
    "You're my favorite notification to receive all day.",
    "If kisses were snowflakes, I'd send you a blizzard.",
    "I love you even when I'm hangry. That's true love.",
    "You're the reason I look down at my phone and smile. Then realize I'm not texting you.",
    "My love for you is like diarrhea, I just can't hold it in.",
    "You're the avocado to my toast - absolutely perfect together.",
    "I love you more than pizza, and that's saying a lot.",
    "You're my human blanket and I never want to let go.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "I love you to the moon and back, and to the store for snacks.",
    "You're the cheese to my pizza - making everything better.",
    "I love you more than my bed, and that's really saying something.",
    "You're my favorite kind of trouble.",
    "I love you even when you steal all the blankets.",
    "You're the Netflix to my chill - perfect together always."
];

let currentQuoteIndex = 0;

// Password Protection
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = 'kunthani';
    const passwordScreen = document.getElementById('passwordScreen');
    const mainContent = document.getElementById('mainContent');
    const errorMessage = document.getElementById('passwordError');
    
    if (password === correctPassword) {
        passwordScreen.style.opacity = '0';
        setTimeout(() => {
            passwordScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            createFloatingHearts();
            showNextQuote();
        }, 500);
    } else {
        errorMessage.style.display = 'block';
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').style.borderColor = '#e74c3c';
        
        // Shake animation for wrong password
        const container = document.querySelector('.password-container');
        container.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            container.style.animation = '';
        }, 500);
    }
}

// Allow Enter key to submit password
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Create Floating Hearts
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓', '💞'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 1000);
}

// Quote Functions
function showNextQuote() {
    const quoteText = document.getElementById('quoteText');
    quoteText.style.opacity = '0';
    
    setTimeout(() => {
        quoteText.textContent = quotes[currentQuoteIndex];
        quoteText.style.opacity = '1';
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }, 300);
}

// Proposal Button Functions
let noButtonClicks = 0;
const noButtonMessages = [
    "Are you sure? 💔",
    "Think again! 🥺",
    "Please don't break my heart! 😢",
    "I'll be so sad! 😭",
    "Pretty please? 🙏",
    "Last chance! 💔"
];

function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const cryingBear = document.getElementById('cryingBear');
    const happyMessage = document.getElementById('happyMessage');
    
    noButtonClicks++;
    
    if (noButtonClicks >= 3) {
        // Show crying bear after 3 clicks
        noButton.style.display = 'none';
        cryingBear.classList.remove('hidden');
        
        // Add more dramatic crying effect
        setTimeout(() => {
            cryingBear.innerHTML = `
                <p style="font-size: 3rem;">😭💔</p>
                <p style="font-size: 1.3rem; margin-top: 1rem;">Why would you break my heart like this?</p>
                <p style="font-size: 1.1rem; margin-top: 0.5rem;">I thought we had something special...</p>
                <button onclick="resetProposal()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #ff6b6b; color: white; border: none; border-radius: 15px; cursor: pointer;">Give me another chance 💝</button>
            `;
        }, 1000);
    } else {
        // Move the button to random position
        const maxX = window.innerWidth - 150;
        const maxY = window.innerHeight - 100;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noButton.style.position = 'fixed';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
        noButton.style.zIndex = '1000';
        
        // Change button text
        noButton.textContent = noButtonMessages[Math.min(noButtonClicks - 1, noButtonMessages.length - 1)];
        
        // Make button smaller and harder to catch
        noButton.style.transform = `scale(${1 - noButtonClicks * 0.1})`;
        noButton.style.transition = 'all 0.3s ease';
    }
}

function sayYes() {
    const noButton = document.getElementById('noButton');
    const cryingBear = document.getElementById('cryingBear');
    const happyMessage = document.getElementById('happyMessage');
    
    // Hide buttons and show happy message
    document.querySelector('.proposal-buttons').style.display = 'none';
    cryingBear.classList.add('hidden');
    happyMessage.classList.remove('hidden');
    
    // Create celebration effect
    createCelebration();
    
    // Add more hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
}

function resetProposal() {
    const noButton = document.getElementById('noButton');
    const cryingBear = document.getElementById('cryingBear');
    const happyMessage = document.getElementById('happyMessage');
    
    noButtonClicks = 0;
    noButton.style.display = 'inline-block';
    noButton.style.position = 'relative';
    noButton.style.left = 'auto';
    noButton.style.top = 'auto';
    noButton.style.transform = 'scale(1)';
    noButton.textContent = 'No 💔';
    noButton.style.zIndex = 'auto';
    
    cryingBear.classList.add('hidden');
    cryingBear.innerHTML = '<p>😭💔</p><p>Why would you break my heart like this?</p>';
    
    happyMessage.classList.add('hidden');
    document.querySelector('.proposal-buttons').style.display = 'flex';
}

function createCelebration() {
    const colors = ['#ff6b6b', '#4CAF50', '#ffeb3b', '#2196F3', '#ff9800'];
    const container = document.body;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        container.appendChild(confetti);
        
        // Animate confetti falling
        const duration = Math.random() * 3 + 2;
        const horizontalMovement = (Math.random() - 0.5) * 200;
        
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) translateX(${horizontalMovement}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝'];
    
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
    heart.style.zIndex = '9999';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'floatUp 3s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Add floating up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Tease Section Functions
function showTeaseMessage() {
    const forgivenessDiv = document.getElementById('teaseForgiveness');
    const forgiveBtn = document.querySelector('.tease-forgive-btn');
    
    forgivenessDiv.classList.remove('hidden');
    forgiveBtn.style.display = 'none';
    
    // Create celebration hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
}

// Add smooth transitions for quote changes
document.getElementById('quoteText').style.transition = 'opacity 0.3s ease';

// Initialize on page load
window.addEventListener('load', () => {
    // Focus on password input
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.focus();
    }
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to love letter
    const loveLetter = document.querySelector('.love-letter');
    if (loveLetter) {
        loveLetter.addEventListener('mouseenter', () => {
            loveLetter.style.transform = 'scale(1.02)';
            loveLetter.style.transition = 'transform 0.3s ease';
        });
        
        loveLetter.addEventListener('mouseleave', () => {
            loveLetter.style.transform = 'scale(1)';
        });
    }
    
    // Add click effect to quote card
    const quoteCard = document.querySelector('.quote-card');
    if (quoteCard) {
        quoteCard.addEventListener('click', () => {
            showNextQuote();
        });
    }
});
