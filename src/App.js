import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './Layouts/Main';
import Quizs from './components/Quizs/Quizs'
function App() {
    const router = createBrowserRouter([
        {
            path : '/',
            element : <Main> </Main>,
            children : [
                {
                    path : '/',
                    loader : async()=> {return fetch('https://openapi.programming-hero.com/api/quiz')},
                    element : <Home></Home>
                },
                {
                    path: `/quiz/:id`,
                    loader : async({params})=> {return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)},
                    element : <Quizs></Quizs>
                }
            ] 
        },
        
        {
            path : '*',
            element : <div> 404 </div>
        }
    ])
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
