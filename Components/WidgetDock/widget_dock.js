// ═══════════════════════════════════════════════════════════
//  WIDGET DOCK — Unified Trigger Container
//  Chat · Music · Language
//  Auto-opens with linear slide-in animation on page load
// ═══════════════════════════════════════════════════════════
(function () {

    // ─── Load CSS ─────────────────────────────────────────────
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'Components/WidgetDock/widget_dock.css';
    document.head.appendChild(link);

    // ─── Build Dock Container ─────────────────────────────────
    const dock = document.createElement('div');
    dock.className = 'widget-dock';
    dock.id = 'widget-dock';

    // ── Chat Button (Profile Image) ──
    const chatBtn = document.createElement('button');
    chatBtn.className = 'widget-dock-btn dock-chat';
    chatBtn.setAttribute('aria-label', 'Open Maria Chatbot');
    chatBtn.setAttribute('data-label', 'Chat');
    chatBtn.innerHTML = `
        <img src="Chatbot/assets/MZHSS.png" alt="Chat" />
        <span class="dock-pulse"></span>
    `;

    // ── Divider ──
    const divider = document.createElement('div');
    divider.className = 'dock-divider';

    // ── Music Tooltip Helper ──
    const dockTooltip = document.createElement('div');
    dockTooltip.className = 'dock-tooltip';
    dockTooltip.id = 'dock-tooltip';
    document.body.appendChild(dockTooltip);

    // ── Music Button ──
    const musicBtn = document.createElement('button');
    musicBtn.className = 'widget-dock-btn dock-music';
    musicBtn.setAttribute('aria-label', 'Toggle Music');
    musicBtn.setAttribute('data-label', 'Music: Off');
    musicBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;

    // ── Assemble ──
    dock.appendChild(chatBtn);
    dock.appendChild(divider);
    dock.appendChild(musicBtn);
    document.body.appendChild(dock);

    // ─── Auto-Open ───
    // Expands the dock after a short grace period on load

    setTimeout(function () {
        dock.classList.add('dock-open');

        // Sync music button state on load
        // (musicStateChanged fires before dock loads, so check directly)
        if (window.bgAudio && !window.bgAudio.paused) {
            musicBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
            musicBtn.setAttribute('data-label', 'Music: On');
            musicBtn.classList.add('dock-active');
        }
    }, 100);

    // ─── Event Dispatchers ────────────────────────────────────

    // Chat toggle — delegate to the hidden #chat-toggle so ui.js handles everything
    chatBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // prevent outside-click close from firing
        var chatToggle = document.getElementById('chat-toggle');
        if (chatToggle) {
            chatToggle.click();
        }
    });

    // ─── Music Toggle ─────────────────────────────────────────

    // Sync initial state if music was auto-started
    document.addEventListener('musicStateChanged', function (e) {
        if (e.detail.playing) {
            musicBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
            musicBtn.setAttribute('data-label', 'Music: On');
            musicBtn.classList.add('dock-active');
        } else {
            musicBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
            musicBtn.setAttribute('data-label', 'Music: Off');
            musicBtn.classList.remove('dock-active');
        }
    });

    // Mute / Unmute
    musicBtn.addEventListener('click', function () {
        if (!window.bgAudio) return;

        if (window.bgAudio.paused) {
            window.bgAudio.play().then(() => {
                musicBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
                musicBtn.setAttribute('data-label', 'Music: On');
                musicBtn.classList.add('dock-active');
            }).catch(e => console.error("Audio playback failed:", e));
        } else {
            window.bgAudio.pause();
            musicBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
            musicBtn.setAttribute('data-label', 'Music: Off');
            musicBtn.classList.remove('dock-active');
        }
    });

})();
