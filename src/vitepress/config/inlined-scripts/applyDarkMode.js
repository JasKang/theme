(() => {
  const saved = localStorage.getItem('jaskang-theme-appearance');
  if (!saved || saved === 'auto' ? window.matchMedia(`(prefers-color-scheme: dark)`).matches : saved === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();
