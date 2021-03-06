import { convertDay, getMeridiem, convertTime } from '../utils/convertDate.js';
import clockStyle from '../style/style.css';

export default function Clock({ targetEl, initialState }) {
  const clockEl = document.createElement('div');
  clockEl.className = clockStyle.clock;
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    clockEl.innerHTML = `
      ${convertDay[this.state.day]} ${convertTime(
      true,
      this.state.hour
    )} : ${convertTime(false, this.state.minute)} ${getMeridiem(
      this.state.hour
    )}
    `;
  };

  this.render();

  targetEl.appendChild(clockEl);
}
