import { v1 as uuid } from 'uuid';
import '../Components/Main/Styles.css';
export let todos = [
  // { id: uuid(), name: 'value', priority: 1, completed: false },
  {
    id: uuid(),
    name: 'Smile - your first Todo',
    priority: '1',
    completed: false,
    items: [],
  },
];
