import React from 'react';
import '../assets/css/App.css';
import Header from '../components/Header';
import Navi from '../components/Navi';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

const TodoApp = ({ task, tasks, inputTask, addTask }) => {
    return (
        <div className="container">
            <Header />
            <div className="contents">
            <Navi />
            <main>
                <input
                    type="text"
                    placeholder="Please Input"
                    onChange={(e) => inputTask(e.target.value)}
                />
                <input
                    type="button"
                    value="add"
                    onClick={ () => addTask(task) }
                />
                <ul>
                    {tasks.map((item, i) => {
                        return <li key={i}>{item}</li>;
                    })}
                </ul>
            </main>
            <Aside />
            </div>
            <Footer />
        </div>
    );
}

export default TodoApp;