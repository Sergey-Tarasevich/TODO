import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import './Styles.css';

function TodoList() {
  let todos = useSelector((state) => state);

  // const [characters, updateCharacters] = useState(todos);
  // function handleOnDragEnd(result) {
  //   if (!result.destination) return;

  //   const items = Array.from(characters);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   updateCharacters(items);
  // }

  const onDragEnd = (result) => {
    if (!result.destination) return;

    if (result.destination) {
      const items = [...todos];
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      return items;
    }
  };
  // DnD Instructions:
  // DragDropContext - Wraps the part of your application you want to have drag and drop enabled for
  // Droppable - An area that can be dropped into. Contains <Draggable />
  // Draggable - What can be dragged around
  return (
    <div className="list-group">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items">
          {(provided) => (
            <ul
              className="col-12 offset-lg-3 col-lg-6 list-group"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={String(index)}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="list-group-item"
                      // key={index}
                    >
                      <TodoItem key={todos.index} todo={todo} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TodoList;
