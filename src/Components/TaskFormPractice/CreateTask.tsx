import React, { Component } from "react";
import styles from "./CreateTask.module.css";

interface IState {
    currentTask: string;
    tasks: Array<string>;
  }
  

export default class CreateTask extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: "",
      tasks: [],
    };
  }

  handelSubmit(e: any) {
    e.preventDefault();
    this.setState({
        currentTask: "",
        tasks: [
            ...this.state.tasks,
            this.state.currentTask
        ]
    })
  }

  render() {
    console.log(this.state.currentTask);
    console.warn(this.state.tasks);
    
    return (
      <div className={styles.container}>
        <h1>React TypeScript Todo List</h1>
        <form onSubmit={(e) => this.handelSubmit(e)}>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Add a task"
            className={styles.input}
            onChange={(e) => this.setState({ currentTask: e.target.value })}
            value={this.state.currentTask}
          />

          <button type="submit" className={styles.button}> Add Task </button>
        </form>
      </div>
    );
  }
}
