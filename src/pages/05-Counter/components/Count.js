import counterStyle from '../style/style.css';

export default function Count({ targetEl, initialState }) {
  const numberEl = document.createElement('h1');
  numberEl.className = counterStyle.count;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    numberEl.innerHTML = `${this.state}`;
  };
  this.render();

  targetEl.appendChild(numberEl);
}
