const speak = (containerId: string, text: string, priority: string) => {
  const el = document.createElement('div');
  const id = `speak-${Date.now()}`;
  el.setAttribute('id', id);
  el.setAttribute('aria-live', priority || 'polite');
  el.setAttribute('aria-hidden', 'false');
  el.classList.add('sr-only');
  document.getElementById(containerId)?.appendChild(el);
  const ele = document.getElementById(id);
  setTimeout(() => {
    if (ele) ele.innerHTML = text;
  }, 100);
  setTimeout(() => {
    if (ele) document.body.removeChild(ele);
  }, 200);
};

export default speak;
