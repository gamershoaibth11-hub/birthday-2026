// Birthday Date: February 4, 2026
// Batch unlock times throughout the day
const BATCH_UNLOCK_TIMES = {
    1: new Date('2026-02-04T00:00:00'), // 12:00 AM - Batch 1 (Chithi 1-4)
    2: new Date('2026-02-04T09:00:00'), // 9:00 AM - Batch 2 (Chithi 5-8)
    3: new Date('2026-02-04T13:00:00'), // 1:00 PM - Batch 3 (Chithi 9-12)
    4: new Date('2026-02-04T17:00:00'), // 5:00 PM - Batch 4 (Chithi 13-16)
    5: new Date('2026-02-04T21:00:00'), // 9:00 PM - Batch 5 (Chithi 17-20)
    6: new Date('2026-02-04T23:59:00')  // 11:59 PM - Batch 6 (Chithi 21-24) FINAL
};

const COOLDOWN_SECONDS = 10; // 10 seconds cooldown between chithis in same batch

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎂 Birthday website loaded!');
    
    // Always show landing first
    showSection('landing');
    
    // Create confetti animation
    setTimeout(() => {
        createConfetti();
        console.log('🎊 Confetti created');
    }, 200);
    
    // Initialize night surprise check
    checkNightSurprise();
    setInterval(checkNightSurprise, 60000);
});

function startJourney() {
    console.log('🚀 Start Journey clicked!');
    
    // Save start time
    if (!localStorage.getItem('birthdayStartTime')) {
        localStorage.setItem('birthdayStartTime', Date.now());
    }
    
    // Hide landing page with animation
    const landing = document.getElementById('landing');
    if (!landing) {
        console.error('❌ Landing section not found!');
        return;
    }
    
    console.log('✨ Hiding landing page...');
    landing.style.transition = 'all 0.5s ease';
    landing.style.opacity = '0';
    landing.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        landing.classList.remove('active');
        landing.style.display = 'none';
        
        console.log('📄 Showing sections...');
        
        // Show all sections one by one
        const sections = [
            'chithi-section',
            'memory-section',
            'voice-section',
            'final-section',
            'credits'
        ];
        
        sections.forEach((sectionId, index) => {
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.classList.add('active');
                    section.style.display = 'block';
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        section.style.transition = 'all 0.6s ease';
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, 50);
                    
                    console.log(`✅ Showing: ${sectionId}`);
                } else {
                    console.warn(`⚠️ Section not found: ${sectionId}`);
                }
            }, index * 100);
        });
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Initialize all sections
        setTimeout(() => {
            console.log('🎨 Initializing content...');
            checkTempUnlock(); // Check if chithis temporarily unlocked
            renderChithis();
            renderMemories();
        }, 1000);
    }, 500);
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// ===== CHITHI SYSTEM =====

function renderChithis() {
    const grid = document.getElementById('chithiGrid');
    grid.innerHTML = '';
    
    CHITHIS.forEach((chithi, index) => {
        const card = document.createElement('div');
        card.className = 'chithi-card';
        
        const isUnlocked = isChithiUnlocked(chithi.id);
        const isOpened = localStorage.getItem(`chithi_${chithi.id}_opened`) === 'true';
        
        if (isOpened) {
            card.classList.add('opened');
        } else if (!isUnlocked) {
            card.classList.add('locked');
        }
        
        card.innerHTML = `
            <div class="chithi-envelope">📨</div>
            <h3>${chithi.title}</h3>
            <p class="chithi-time">${chithi.batchTime}</p>
            ${!isUnlocked ? `<p class="unlock-timer" id="timer_${chithi.id}">🔒 Unlocking soon...</p>` : ''}
            ${isOpened ? '<span class="opened-badge">✅ Read</span>' : ''}
        `;
        
        if (isUnlocked && !isOpened) {
            card.classList.add('pulse');
        }
        
        card.onclick = () => openChithi(chithi.id);
        grid.appendChild(card);
    });
    
    // Start timer updates
    updateChithiTimers();
    setInterval(updateChithiTimers, 1000);
}

function getChithiUnlockTime(chithiId) {
    const chithi = CHITHIS.find(c => c.id === chithiId);
    if (!chithi) return null;
    
    // Get the batch unlock time
    const batchUnlockTime = BATCH_UNLOCK_TIMES[chithi.batch];
    if (!batchUnlockTime) return null;
    
    // Position within batch (0-3 for chithis 1-4 in each batch)
    const positionInBatch = (chithiId - 1) % 4;
    
    // Add cooldown: 10 seconds for each chithi after the first in the batch
    const cooldownMs = positionInBatch * COOLDOWN_SECONDS * 1000;
    
    return new Date(batchUnlockTime.getTime() + cooldownMs);
}

function isChithiUnlocked(chithiId) {
    // Check if temporarily unlocked by secret code
    const chithi = CHITHIS.find(c => c.id === chithiId);
    if (chithi && chithi.tempUnlocked) {
        return true;
    }
    
    const unlockTime = getChithiUnlockTime(chithiId);
    if (!unlockTime) return false;
    
    const now = Date.now();
    const isTimeReached = now >= unlockTime.getTime();
    
    // Check if previous chithi in same batch was opened (for cooldown)
    if ((chithiId - 1) % 4 !== 0) { // Not first in batch
        const prevChithiId = chithiId - 1;
        const prevOpened = localStorage.getItem(`chithi_${prevChithiId}_opened`) === 'true';
        
        // If previous not opened yet, this one stays locked even if time reached
        if (!prevOpened && isTimeReached) {
            return false;
        }
    }
    
    return isTimeReached;
}

function updateChithiTimers() {
    CHITHIS.forEach(chithi => {
        const timerEl = document.getElementById(`timer_${chithi.id}`);
        if (!timerEl) return;
        
        const unlockTime = getChithiUnlockTime(chithi.id);
        const remaining = unlockTime.getTime() - Date.now();
        
        if (remaining <= 0) {
            // Check if previous chithi in batch needs to be opened first
            if ((chithi.id - 1) % 4 !== 0) {
                const prevChithiId = chithi.id - 1;
                const prevOpened = localStorage.getItem(`chithi_${prevChithiId}_opened`) === 'true';
                
                if (!prevOpened) {
                    timerEl.textContent = `🔒 Read Chithi #${prevChithiId} first`;
                    return;
                }
            }
            
            renderChithis(); // Refresh to show unlocked
        } else {
            const hours = Math.floor(remaining / (1000 * 60 * 60));
            const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
            
            if (hours > 0) {
                timerEl.textContent = `🔒 Unlocks in ${hours}h ${minutes}m`;
            } else if (minutes > 0) {
                timerEl.textContent = `🔒 Unlocks in ${minutes}m ${seconds}s`;
            } else {
                timerEl.textContent = `🔒 Unlocks in ${seconds}s`;
            }
        }
    });
}

function openChithi(chithiId) {
    const chithi = CHITHIS.find(c => c.id === chithiId);
    
    // Check if previous chithi in batch was opened (for sequential opening)
    if ((chithiId - 1) % 4 !== 0) {
        const prevChithiId = chithiId - 1;
        const prevOpened = localStorage.getItem(`chithi_${prevChithiId}_opened`) === 'true';
        
        if (!prevOpened) {
            alert(`Age Chithi #${prevChithiId} ta poro! Eksathe shob khulle surprise ta thakbe na 😊`);
            return;
        }
    }
    
    if (!isChithiUnlocked(chithiId)) {
        alert('Ei chithi ta ekhono locked! Ektu wait koro ❤️');
        return;
    }
    
    document.getElementById('chithiTitle').textContent = chithi.title;
    document.getElementById('chithiContent').innerHTML = chithi.content.replace(/\n/g, '<br>');
    document.getElementById('chithiModal').style.display = 'flex';
    
    // Mark as opened
    localStorage.setItem(`chithi_${chithiId}_opened`, 'true');
    
    // Update display
    setTimeout(() => {
        renderChithis();
    }, 300);
}

// ===== MEMORY SHUFFLE =====

let shuffleCount = 0;
const SHUFFLES_TO_UNLOCK = 10;

function renderMemories() {
    shuffleMemories();
}

function shuffleMemories() {
    const grid = document.getElementById('memoryGrid');
    const currentCards = grid.querySelectorAll('.memory-card');
    
    // Fade out current cards
    currentCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
        }, index * 50);
    });
    
    // Wait then show new cards
    setTimeout(() => {
        grid.innerHTML = '';
        
        // Pick 4 random memories
        const shuffled = [...MEMORIES].sort(() => Math.random() - 0.5).slice(0, 4);
        
        shuffled.forEach((memory, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            
            const cardInner = document.createElement('div');
            cardInner.className = 'memory-card-inner';
            
            const cardFront = document.createElement('div');
            cardFront.className = 'memory-card-front';
            
            const cardBack = document.createElement('div');
            cardBack.className = 'memory-card-back';
            cardBack.innerHTML = `<p class="memory-caption">${memory.caption}</p>`;
            
            if (memory.type === 'video') {
                cardFront.innerHTML = `
                    <video src="${memory.file}"></video>
                    <div class="video-play-icon"></div>
                `;
                cardFront.onclick = (e) => {
                    e.stopPropagation();
                    openImageModal(memory.file, 'video');
                };
            } else {
                cardFront.innerHTML = `<img src="${memory.file}" alt="Memory">`;
                cardFront.onclick = (e) => {
                    e.stopPropagation();
                    openImageModal(memory.file, 'image');
                };
            }
            
            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            
            // Add flip button container
            const flipContainer = document.createElement('div');
            flipContainer.style.textAlign = 'center';
            flipContainer.style.marginTop = '10px';
            
            const flipBtn = document.createElement('button');
            flipBtn.className = 'flip-button';
            flipBtn.textContent = 'Flip Card 🔄';
            flipBtn.onclick = () => {
                card.classList.toggle('flipped');
                flipBtn.textContent = card.classList.contains('flipped') ? 'Show Image 📷' : 'Flip Card 🔄';
            };
            
            flipContainer.appendChild(flipBtn);
            
            const wrapper = document.createElement('div');
            wrapper.appendChild(card);
            wrapper.appendChild(flipContainer);
            
            grid.appendChild(wrapper);
            
            // Animate in
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, index * 100);
        });
        
        // Update shuffle count
        shuffleCount++;
        updateGalleryButton();
        
    }, currentCards.length * 50 + 200);
}

function updateGalleryButton() {
    const btn = document.getElementById('galleryBtn');
    const remaining = SHUFFLES_TO_UNLOCK - shuffleCount;
    
    if (shuffleCount >= SHUFFLES_TO_UNLOCK) {
        btn.disabled = false;
        btn.innerHTML = '🖼️ Full Gallery Dekho';
    } else {
        btn.disabled = true;
        btn.innerHTML = `🔒 Full Gallery (${remaining} shuffles remaining)`;
    }
}

function showFullGallery() {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    
    // Show all memories
    MEMORIES.forEach((memory, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.style.opacity = '0';
        
        const cardInner = document.createElement('div');
        cardInner.className = 'memory-card-inner';
        
        const cardFront = document.createElement('div');
        cardFront.className = 'memory-card-front';
        
        const cardBack = document.createElement('div');
        cardBack.className = 'memory-card-back';
        cardBack.innerHTML = `<p class="memory-caption">${memory.caption}</p>`;
        
        if (memory.type === 'video') {
            cardFront.innerHTML = `
                <video src="${memory.file}"></video>
                <div class="video-play-icon"></div>
            `;
            cardFront.onclick = (e) => {
                e.stopPropagation();
                openImageModal(memory.file, 'video');
            };
        } else {
            cardFront.innerHTML = `<img src="${memory.file}" alt="Memory">`;
            cardFront.onclick = (e) => {
                e.stopPropagation();
                openImageModal(memory.file, 'image');
            };
        }
        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        
        // Add flip button
        const flipContainer = document.createElement('div');
        flipContainer.style.textAlign = 'center';
        flipContainer.style.marginTop = '10px';
        
        const flipBtn = document.createElement('button');
        flipBtn.className = 'flip-button';
        flipBtn.textContent = 'Flip Card 🔄';
        flipBtn.onclick = () => {
            card.classList.toggle('flipped');
            flipBtn.textContent = card.classList.contains('flipped') ? 'Show Image 📷' : 'Flip Card 🔄';
        };
        
        flipContainer.appendChild(flipBtn);
        
        const wrapper = document.createElement('div');
        wrapper.appendChild(card);
        wrapper.appendChild(flipContainer);
        
        grid.appendChild(wrapper);
        
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
        }, index * 20);
    });
    
    // Update subtitle
    const subtitle = document.querySelector('#memory-section .section-subtitle');
    subtitle.textContent = `Shob ${MEMORIES.length} ta memories eksathe! 💕`;
}

function openImageModal(src, type) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('modalImage');
    const video = document.getElementById('modalVideo');
    
    modal.classList.add('active');
    
    if (type === 'video') {
        img.classList.remove('active');
        video.classList.add('active');
        video.src = src;
        video.play();
    } else {
        video.classList.remove('active');
        video.pause();
        img.classList.add('active');
        img.src = src;
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    const video = document.getElementById('modalVideo');
    
    modal.classList.remove('active');
    video.pause();
    video.src = '';
}

// ===== UNLOCK ALL CHITHIS =====

function unlockAllChithis() {
    const code = document.getElementById('chithiSecretCode').value.trim().toLowerCase();
    const resultEl = document.getElementById('secretResult');
    
    if (code === 'bolbona') {
        // Save unlock time in localStorage
        const unlockTime = new Date().getTime();
        localStorage.setItem('chithiUnlockTime', unlockTime);
        
        // Unlock all chithis temporarily
        CHITHIS.forEach(chithi => {
            chithi.tempUnlocked = true;
        });
        
        // Re-render chithis
        renderChithis();
        
        // Show success message
        resultEl.textContent = '🎉 Shob chithi 5 minute er jonno unlock hoye geche! Scroll up kore dekho!';
        resultEl.className = 'secret-result success';
        
        // Clear input
        document.getElementById('chithiSecretCode').value = '';
        
        // Scroll to chithi section
        setTimeout(() => {
            document.getElementById('chithi-section').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
        
        // Auto lock after 5 minutes
        setTimeout(() => {
            CHITHIS.forEach(chithi => {
                chithi.tempUnlocked = false;
            });
            localStorage.removeItem('chithiUnlockTime');
            renderChithis();
            
            // Show re-lock message if on page
            if (resultEl) {
                resultEl.textContent = '🔒 5 minute shesh! Chithis locked hoye geche.';
                resultEl.className = 'secret-result error';
            }
        }, 5 * 60 * 1000); // 5 minutes
        
    } else {
        resultEl.textContent = '❌ Wrong code! Try again...';
        resultEl.className = 'secret-result error';
    }
}

// Check if chithis should be unlocked on page load
function checkTempUnlock() {
    const unlockTime = localStorage.getItem('chithiUnlockTime');
    if (unlockTime) {
        const now = new Date().getTime();
        const elapsed = now - parseInt(unlockTime);
        const fiveMinutes = 5 * 60 * 1000;
        
        if (elapsed < fiveMinutes) {
            // Still within 5 minutes
            CHITHIS.forEach(chithi => {
                chithi.tempUnlocked = true;
            });
            
            // Set timeout for remaining time
            const remaining = fiveMinutes - elapsed;
            setTimeout(() => {
                CHITHIS.forEach(chithi => {
                    chithi.tempUnlocked = false;
                });
                localStorage.removeItem('chithiUnlockTime');
                renderChithis();
            }, remaining);
        } else {
            // Expired, remove from storage
            localStorage.removeItem('chithiUnlockTime');
        }
    }
}

// ===== LITTLE THINGS =====

function renderLittleThings() {
    const grid = document.getElementById('thingsGrid');
    grid.innerHTML = '';
    
    LITTLE_THINGS.forEach(thing => {
        const card = document.createElement('div');
        card.className = 'thing-card';
        card.innerHTML = `
            <div class="thing-icon">${thing.icon}</div>
            <h3>${thing.title}</h3>
        `;
        
        card.onclick = () => {
            document.getElementById('thingContent').innerHTML = thing.detail.replace(/\n/g, '<br>');
            document.getElementById('thingModal').style.display = 'flex';
        };
        
        grid.appendChild(card);
    });
}

// ===== MOOD SECTION =====

function showMoodResponse(mood) {
    const response = MOOD_RESPONSES[mood];
    const responseEl = document.getElementById('moodResponse');
    responseEl.innerHTML = response.replace(/\n/g, '<br>');
    responseEl.style.display = 'block';
    responseEl.classList.add('fade-in');
}

// ===== VOICE & SILENCE =====

function playWish() {
    const responseEl = document.getElementById('voiceResponse');
    responseEl.innerHTML = `
        <div class="voice-message">
            <p>💌 Birthday Wish from Shoaib</p>
            <audio controls autoplay>
                <source src="wish.m4a" type="audio/mp4">
                Your browser does not support audio.
            </audio>
            <p class="voice-caption">"Happy Birthday Onti! Tomar jonno amar special wish ❤️"</p>
        </div>
    `;
    responseEl.style.display = 'block';
}

function playSong() {
    const responseEl = document.getElementById('voiceResponse');
    responseEl.innerHTML = `
        <div class="voice-message">
            <p>🎵 Tomar Jonno Gaan - Shoaib</p>
            <audio controls autoplay>
                <source src="song.m4a" type="audio/mp4">
                Your browser does not support audio.
            </audio>
            <p class="voice-caption">"Ami tomar jonno ei gaan ta gaisi lam. Hopefully valo lagbe! 🎶"</p>
        </div>
    `;
    responseEl.style.display = 'block';
}

function playVoice() {
    playWish(); // Default to wish
}

function showSilence() {
    const responseEl = document.getElementById('voiceResponse');
    responseEl.innerHTML = `
        <div class="silence-message">
            <p>Ami emnie onek beshi kotha boli,</p>
            <p>ektu naile chup kore thaklam nahoy.</p>
            <br>
            <p>Ami chup kore thakleo tomar sathei thakte chai.</p>
            <p><strong>Ajibon.</strong></p>
            <p><strong>Shobshomoy.</strong> 🤍</p>
        </div>
    `;
    responseEl.style.display = 'block';
}

// ===== NIGHT SURPRISE =====

function checkNightSurprise() {
    const now = new Date();
    const hour = now.getHours();
    
    // Unlock at 10 PM (22:00)
    if (hour >= 22 || hour < 6) {
        document.getElementById('lockText').style.display = 'none';
        document.getElementById('nightContent').classList.remove('hidden');
    }
}

// ===== FLOATING MISS BUTTON =====

function showMissMessage() {
    const message = MISS_MESSAGES[Math.floor(Math.random() * MISS_MESSAGES.length)];
    
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== MODAL CONTROL =====

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal on outside click
window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// ===== CONFETTI ANIMATION =====

function createConfetti() {
    const container = document.querySelector('.confetti-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing
    
    const colors = ['#ff6b9d', '#c44569', '#ffa8cc', '#ffd93d', '#6bcfff'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = (Math.random() * 8 + 5) + 'px';
        container.appendChild(confetti);
    }
}

// ===== COUNTDOWN TIMER =====

function updateCountdown() {
    const now = Date.now();
    let nextBatchTime = null;
    let nextBatchNumber = null;
    
    // Find next unlocking batch
    for (let batch in BATCH_UNLOCK_TIMES) {
        const batchTime = BATCH_UNLOCK_TIMES[batch].getTime();
        if (batchTime > now) {
            nextBatchTime = batchTime;
            nextBatchNumber = batch;
            break;
        }
    }
    
    if (!nextBatchTime) {
        document.getElementById('countdownMessage').textContent = "All batches unlocked! 🎉";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        return;
    }
    
    const remaining = nextBatchTime - now;
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    const batchTimes = ['12:00 AM', '9:00 AM', '1:00 PM', '5:00 PM', '9:00 PM', '11:59 PM'];
    document.getElementById('countdownMessage').textContent = `Batch ${nextBatchNumber} unlocks at ${batchTimes[nextBatchNumber - 1]}`;
}

// Start countdown
setInterval(updateCountdown, 1000);
updateCountdown();

// ===== WHY I LOVE YOU GENERATOR =====

function showRandomReason() {
    const reason = LOVE_REASONS[Math.floor(Math.random() * LOVE_REASONS.length)];
    const card = document.getElementById('loveReasonCard');
    const text = document.getElementById('loveReasonText');
    
    // Animate
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        text.textContent = reason;
        card.style.transform = 'scale(1)';
    }, 200);
}

// ===== SECRET CODE GAME =====

function checkSecretCode() {
    const input = document.getElementById('secretCode').value.toLowerCase().trim();
    const messageDiv = document.getElementById('secretMessage');
    
    if (!input) {
        alert('Code to lekho age! 😊');
        return;
    }
    
    const message = SECRET_CODES[input] || SECRET_CODES['default'];
    
    messageDiv.innerHTML = `
        <p class="secret-revealed">
            ${message}
        </p>
    `;
    messageDiv.classList.remove('hidden');
    
    if (input in SECRET_CODES && input !== 'default') {
        // Correct answer animation
        messageDiv.style.background = 'linear-gradient(135deg, #d4edda, #c3e6cb)';
        messageDiv.style.border = '2px solid #28a745';
        
        // Confetti for correct answer
        for (let i = 0; i < 20; i++) {
            createMiniConfetti();
        }
    }
}

function createMiniConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#ffa8cc', '#ffd93d', '#6bcfff'];
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '0';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.animation = 'fall 3s linear forwards';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
}
