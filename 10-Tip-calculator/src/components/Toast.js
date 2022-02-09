export default function Toast({ time }) {
  const toastEl = document.createElement('div');
  toastEl.className = 'toast';
  toastEl.style.display = 'none';

  this.render = (message) => {
    toastEl.innerHTML = message;
    toastEl.style.display = 'block';

    setTimeout(() => {
      toastEl.style.display = 'none';
      // toastEl.innerHTML = '';
    }, time);
  };

  document.body.appendChild(toastEl);
}
