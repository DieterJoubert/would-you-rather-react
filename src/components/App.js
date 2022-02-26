import { Fragment, useEffect } from 'react';
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import HomePage from './HomePage';
import Nav from './Nav';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData())
  })

  const authedUser = useSelector((state) => state.authedUser)
  const isLoading = authedUser === null

  return (
    <BrowserRouter>
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {isLoading === true
            ? null
            : <div>DONE LOADING
              <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/new-question' exact element={<NewQuestion />} />
                <Route path='/leaderboard' exact element={<LeaderBoard />} />
              </Routes>
            </div>}
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App
