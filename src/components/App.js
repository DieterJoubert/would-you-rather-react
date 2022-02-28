import { Fragment, useEffect } from 'react';
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Dashboard from './Dashboard';
import Nav from './Nav';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Login from './Login';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData())
  })

  const authedUser = useSelector((state) => state.authedUser)

  return (
    <BrowserRouter>
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {!authedUser
            ? <Login />
            : <div>
              <Routes>
                <Route path='/' exact element={<Dashboard />} />
                <Route path='/add' element={<NewQuestion />} />
                <Route path='/leaderboard' element={<LeaderBoard />} />
                <Route path='/question/:id' element={<QuestionPage />} />
              </Routes>
            </div>}
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App
