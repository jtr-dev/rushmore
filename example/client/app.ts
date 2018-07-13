/**
 * 
 * 
 * Design Implementation
 * subject to change
 */

import {
    rushmore as rush,
    body as h,
    Component
} from 'rushmore';

rush.path('/', [
    (props, state) => {
        App(props, state)
    }
])

const navbar = () => {

}

class TodoApp extends Component {
    todoList = [] 
    get list() {
        return todoList
    }
    addTodo(text, color) {
        this.todoList.push({text, color})
    }
    removeTodo(todo) {
        let id = this.todoList.find(todo)
        this.todoList.splice(id, 1)
    }
    render() {
        return [
            (/*props*/) => {
                h.div('div.todo')
                h.div('', this.list())
            },
            () => {
                /** Possibly use ! or anything NOT an HTML selector for defining values  */
                h.input('!newTodo',{type:"text", placeholder:"Start typing something"})
                h.input('!colorTodo', {type: "color", placeholder: "Pick a Color", value: "blue"})
            },
            ({newTodo, colorTodo}) => {
                await h.button('.btn.btn-primary', {placeholder: "Add a todo"}, this.addTodo(newTodo, colorTodo))
            }
        ]
    }
}

const footer = () => {

}


export const App = () => {
    return [
        () => {
            h("div.container", [
                h("nav", navbar()),
                h("div.hr"),
                h("div", TodoApp),
                h("div.hr"),
                h("footer.footer", footer())
            ])
        }
    ]
}

