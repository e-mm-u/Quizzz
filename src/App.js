import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './Layouts/Main';
import Quizs from './components/Quizs/Quizs'
import Error404 from './components/Error404/Error404';
import Blog from './components/Blog/Blog';

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
                },
                {
                    path : '/blog',
                    element : <Blog></Blog>
                },
            ] 
        },
        
        {
            path : '*',
            element :  <Error404></Error404>
        }
    ])
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
