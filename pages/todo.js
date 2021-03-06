import { useEffect, useState } from 'react'
import styles from '../styles/Todo.module.css'
const Todo = ({ avatar_url, login }) => { //การสร้าง HTTP Request
    //ใช้ state ในการเก็บข้อมูล
    const [tasks, setTasks] = useState([])
    //{ id: 1, name: 'Do homework' },
    //{ id: 2, name: 'Read book' }

    const [name, setName] = useState('')
    const [idEdit, setIdEdit] = useState(0)

    //useEffect ทำการ run ทุกครั้งที่มีการ render หรือทุกครั้งที่มีการ update
    useEffect(async () => {
        let ts = await getTasks();
        console.log(ts)
        setTasks(ts)
    }, [])

    const renderTasks = () => {
        if (tasks !== null)
            return tasks.map((task, index) => (
                <li key={index} className={styles.listItem}>
                    {tasks.id}
                    {(idEdit !== task.id) ? task.name :
                        (<input className={styles.text} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        )}
                    <div className={styles.buttonContainer}>
                        <button className={`${styles.button} ${styles.btnEdit}`} onClick={() => editTask(task.id)}>Edit</button>
                        <button className={`${styles.button} ${styles.btnDelete}`} onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </li>))
    }
    //การเพิ่มปุ่ม Add เพื่อเพิ่มกิจกรรม
    const addTask = (name) => {
        setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, name }])
        console.log(tasks)
    }
    //การสร้างปุ่ม Delete เพื่อลบกิจกรรม
    const deleteTask = (id) => {
        console.log('delete id: ', id)
        let newTasks = tasks.filter((task) => task.id !== +id)
        setTasks(newTasks)
    }
    //การสร้างปุ่ม Edit เพื่อแก้ไขกิจกรรม
    const editTask = (id) => {
        setIdEdit(id)
        let t = tasks.find((task) => +task.id === +id)
        setName(t.name)
        if (+idEdit === +id) {
            let newTasks = tasks.map((task, index) => {
                if (+task.id === +id)
                    tasks[index].name = name
                return task
            })
            setTasks(newTasks)
            setIdEdit(0)
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <img src={avatar_url} width="80" />
                Todo for <span>{login} </span>
            </h1>
            <div className="addContainer">
                <input className={styles.text} type="text" name="addTask" onChange={(e) => (setName(e.target.value))} />
                <button className={`${styles.button}${styles.btnAdd}`} onClick={() => addTask(name)}>Add</button>
            </div>
            <ul className={styles.list}>{renderTasks()}</ul>
        </div>
    )
}
// ---------------------------------------------------------------------------------------------------------- //
//FrondEnd ทำการเรียกการทำงาน
const getTasks = async () => {
    const res = await fetch('http://localhost:3000/')
    const json = await res.json()
    console.log(json)
    return json;
}

Todo.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/users/Pangkoki20')
    const json = await res.json()
    return { login: json.login, avatar_url: json.avatar_url }
}
export default Todo