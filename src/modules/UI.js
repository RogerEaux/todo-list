import '../style.css';
import checkmark from '../images/done.svg';

const createTop = () => {
  const top = document.createElement('header');
  const logo = document.createElement('img');
  const logoTitle = document.createElement('p');
  const logoContainer = document.createElement('div');

  logoTitle.textContent = 'Todo or not todo';
  logo.src = checkmark;
  logo.alt = 'Green chekmark';

  logoContainer.appendChild(logo);
  logoContainer.appendChild(logoTitle);
  top.appendChild(logoContainer);

  return top;
};

const createSide = () => {
  const side = document.createElement('nav');

  return side;
};

const createMain = () => {
  const main = document.createElement('main');
  main.appendChild(createSide());

  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  const para = document.createElement('p');

  footer.classList.add('footer');
  para.textContent = 'Copyright © 2023 RogerEaux';
  footer.appendChild(para);

  return footer;
};

const createContent = () => {
  const body = document.querySelector('body');

  body.appendChild(createTop());
  body.appendChild(createMain());
  body.appendChild(createFooter());
};

export default createContent;
