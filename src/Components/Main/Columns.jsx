import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { updateOnDragAndDrop } from '../../Redux/Actions/actionCreator';

import TodoList from './TodoList';
// import TodoItem from './TodoItem';

import { v1 as uuid } from 'uuid';

function Columns() {
  let todos = useSelector((state) => state);
  let dispatch = useDispatch();

  // const itemsFromBackend = [
  //   { id: uuid(), name: 'First task' },
  //   { id: uuid(), name: "Second task" },
  //   { id: uuid(), name: "Third task" },
  //   { id: uuid(), name: "Fourth task" },
  //   { id: uuid(), name: "Fifth task" }
  // ];

  const columnsTodos = {
    [uuid()]: {
      name: 'To do',
      items: [...todos],
    },
    [uuid()]: {
      name: 'In Progress',
      items: [],
    },
    [uuid()]: {
      name: 'Done',
      items: [],
    },
  };

  let [columns, setColumns] = useState(columnsTodos);

  const updateState = () => {
    dispatch(updateOnDragAndDrop());
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      // Creating a copy of item before removing it from state
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
    updateState();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              key={columnId}
              index={index}
            >
              <h2>{column.name}</h2>

              <div style={{ margin: 8 }}>
                {/* start create form columns */}
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? 'lightblue'
                            : 'lightgrey',
                          padding: 4,
                          width: 350,
                          minHeight: 200,
                        }}
                        // finish create form columns
                      >
                        {column.items.map((todo, index) => {
                          return (
                            <div>
                              {/* <Draggable
                              key={todo.id}
                              draggableId={todo.id}
                              todo={todo}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: 'none',
                                      padding: 16,
                                      margin: '0 0 8px 0',
                                      minHeight: '50px',
                                      backgroundColor: snapshot.isDragging
                                        ? // first value - color when we drop task
                                          '#263B4A'
                                        : // second value - background block task color
                                          '#456C86',
                                      color: 'white',
                                      ...provided.draggableProps.style,
                                    }}
                                  > */}
                              <TodoList />
                              {/* <TodoItem todo={todo} /> */}
                              {/* Todo is: {todo.name}
                              <br />
                              Priority is: {todo.priority} */}
                              {/* </li>
                                );
                              }}
                            </Draggable> */}
                            </div>
                          );
                        })}
                        {provided.placeholder}
                      </ul>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Columns;
