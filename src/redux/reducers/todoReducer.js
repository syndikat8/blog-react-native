const ADD_TASK = "todo/todoReducer/ADD_TASK";
const DELETE_TASK = "todo/todoReducer/DELETE_TASK";
const CHANGE_TASK = "todo/todoReducer/CHANGE_TASK";

const initialState = {
  tasks: [
    { id: "2", title: "FirstTask" }
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now().toString(),
        title: action.newTitle,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.taskId),
      };

    case CHANGE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.taskId) {
            return { ...t, title: action.newTitle };
          }
          return t;
        }),
      };
  }

  return state;
};

export const addTask = (newTitle) => ({ type: ADD_TASK, newTitle });
export const deleteTask = (taskId) => ({ type: DELETE_TASK, taskId });
export const changeTask = (taskId, newTitle) => ({
  type: CHANGE_TASK,
  taskId,
  newTitle,
});
