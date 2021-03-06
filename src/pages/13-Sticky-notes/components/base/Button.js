export default function Button({ targetEl, text, onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = text;

  buttonEl.addEventListener('click', (e) => {
    onClick();
  });

  targetEl.appendChild(buttonEl);
}
