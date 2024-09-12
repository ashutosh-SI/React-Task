import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="todo-list">
      <h1>Task List</h1>
      <ul>
        {tasks.map((item) => (
          <TaskItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
