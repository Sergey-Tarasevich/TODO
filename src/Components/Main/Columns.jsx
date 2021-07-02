import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import TodoList from './TodoList';
import TodoItem from './TodoItem';

import { v1 as uuid } from 'uuid';

function Columns({ todo, priority }) {
  let todos = useSelector((state) => state);

  // const itemsFromBackend = [
  //   { id: uuid(), name: 'First task' },
  //   { id: uuid(), name: "Second task" },
  //   { id: uuid(), name: "Third task" },
  //   { id: uuid(), name: "Fourth task" },
  //   { id: uuid(), name: "Fifth task" }
  // ];

  const columnsFromBackend = {
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

  let [columns, setColumns] = useState(columnsFromBackend);

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
            >
              <h2>{column.name}</h2>

              <div style={{ margin: 8 }}>
                {/* start create form columns */}
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
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
                            <Draggable
                              key={todo.id}
                              draggableId={todo.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
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
                                  >
                                    <TodoList todo={todo.name} />
                                    <TodoItem todo={todo} />
                                    {todos.name}
                                    <br />
                                    Priority is: {todo.priority}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
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
