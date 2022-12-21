// Import stylesheets
import './style.css';

// Import
import { LeetcodeEasy } from './Easy Problems';
import LeetcodeMedium from './Medium Problems';
import { ArrayList } from './Data Structures and Algorithms/Data Structures';
import { List } from './Data Structures and Algorithms/Interfaces';
import { SortingManager } from './Data Structures and Algorithms/Sorting Algorithms';

const init = () => {
  const btns = document.querySelectorAll('.btn');

  let def: string = 'easy';

  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      run(e.target.id);
    });
  });

  function run(choice: string): void {
    switch (choice) {
      case 'easy':
        LeetcodeEasy.test();
        break;
      case 'medium':
        LeetcodeMedium.test();
        break;
      case 'hard':
        console.log('Needs to be implemented');
        break;
      case 'sorting':
        SortingManager.test();
        break;
      default:
        console.log('none');
    }
  }

  run(def);
};

init();
