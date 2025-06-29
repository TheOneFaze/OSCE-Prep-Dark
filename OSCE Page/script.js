// --- MASTER INLINE JAVASCRIPT ---

document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Logic
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const themeKey = 'theme-preference';

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (darkModeToggle) darkModeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            if (darkModeToggle) darkModeToggle.checked = false;
        }
    };

    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            const newTheme = darkModeToggle.checked ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem(themeKey, newTheme);
        });
    }

    // High-Yield / Full Script Toggle Logic (for content pages)
    // These functions need to be global or attached to window to be called from onclick attributes.
    // They are defined here to be included in each HTML file.
    window.toggleSwitch = function (switchEl) { // Make global
        const isActive = switchEl.classList.toggle('active');
        document.getElementById('highYieldLabel').classList.toggle('active', !isActive);
        document.getElementById('fullScriptLabel').classList.toggle('active', isActive);
        document.getElementById('highYield').classList.toggle('active', !isActive);
        document.getElementById('fullScript').classList.toggle('active', isActive);
    }

    window.showContent = function (id) { // Make global
        const highYieldContent = document.getElementById('highYield');
        const fullScriptContent = document.getElementById('fullScript');
        const highYieldLabel = document.getElementById('highYieldLabel');
        const fullScriptLabel = document.getElementById('fullScriptLabel');
        const switchEl = document.querySelector('.toggle-container .switch');

        if (id === 'highYield') {
            highYieldContent.classList.add('active');
            fullScriptContent.classList.remove('active');
            highYieldLabel.classList.add('active');
            fullScriptLabel.classList.remove('active');
            switchEl.classList.remove('active');
        } else { // id === 'fullScript'
            highYieldContent.classList.remove('active');
            fullScriptContent.classList.add('active');
            highYieldLabel.classList.remove('active');
            fullScriptLabel.classList.add('active');
            switchEl.classList.add('active');
        }
    }
});