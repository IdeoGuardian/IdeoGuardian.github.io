function setLanguage(lang) {
    document.body.className = `show-${lang}`;
    localStorage.setItem('preferredLanguage', lang);
}

// Set initial language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLang);
});
