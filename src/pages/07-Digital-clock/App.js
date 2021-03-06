import { Clock } from './components/index.js';
import { getDate } from './utils/convertDate.js';
import clockStyle from './style/style.css';

export default function App({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.className = clockStyle.container;
  const initialState = getDate();

  setInterval(() => {
    const nextState = getDate();
    clock.setState(nextState);
  }, 1000);

  const clock = new Clock({
    targetEl: containerEl,
    initialState,
  });

  targetEl.appendChild(containerEl);
}
