import logo from './logo.svg'
import './App.css'
import MyComponent from './views/MyComponents'
import ListTodo from './views/Todos/ListTodo'
import Nav from './views/nav/nav'
import Home from './views/Home'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import ListUser from './views/User/User';
import TestHook from './views/TestHook'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <TestHook/>
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/user" exact element={<ListUser />} />
          

          </Routes>

          
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
