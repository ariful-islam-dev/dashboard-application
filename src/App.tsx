import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import { Route, Routes, useLocation } from 'react-router-dom'
import PageTitle from './components/Pagetitle'
import ECommerce from './Pages/Dashboard/ECommerce';
import Calendar from './Pages/Calendar'
import Profile from './Pages/Profile'
import Tables from './Pages/Tables'
import Settings from './Pages/Settings'
import Charts from './Pages/Charts'
import Alerts from './Pages/UiElements/Alerts'
import Buttons from './Pages/UiElements/Buttons'
import SignIn from './Pages/Authentication/SignIn'
import SignUp from './Pages/Authentication/SignUp'

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo(0, 0) }, [pathname]);

  useEffect(() => { setTimeout(() => setLoading(false)), 3000 }, []);
  return loading ? (
    <>
      <Loader />
    </>
  ) : (
    <Routes>
      <Route index element={
        <>
          <PageTitle title='eCommerce Dashboard || Admin Dashboard' />
          <ECommerce />
        </>
      } />
      <Route
        path='/calendar'
        element={
          <>
            <PageTitle title="Calendar || Admin Dashboard" />
            <Calendar />
          </>
        }
      />
      <Route
        path='/profile'
        element={
          <>
            <PageTitle title='Profile || Admin Dashboard' />
            <Profile />
          </>
        }
      />
      <Route
        path='/forms/form-elements'
        element={
          <>
            <PageTitle title='Form Layout || Admin Dashboard' />
            <Profile />
          </>
        }
      />
      <Route
        path='/forms/form-layout'
        element={
          <>
            <PageTitle title='Form Layout || Admin Dashboard' />
            <Profile />
          </>
        }
      />
      <Route
        path='/tables'
        element={
          <>
            <PageTitle title='Tables || Admin Dashboard' />
            <Tables />
          </>
        }
      />
      <Route
        path='/settings'
        element={
          <>
            <PageTitle title='Settings || Admin Dashboard' />
            <Settings />
          </>
        }
      />
      <Route
        path='/charts'
        element={
          <>
            <PageTitle title='Basic Chart || Admin Dashboard' />
            <Charts />
          </>
        }
      />
      <Route
        path='/ui/alerts'
        element={
          <>
            <PageTitle title='Alerts || Admin Dashboard' />
            <Alerts />
          </>
        }
      />
      <Route
        path='/ui/buttons'
        element={
          <>
            <PageTitle title='Buttons || Admin Dashboard' />
            <Buttons />
          </>
        }
      />
      <Route
        path='/auth/signin'
        element={
          <>
            <PageTitle title='SignIn || Admin Dashboard' />
            <SignIn />
          </>
        }
      /> <Route
        path='/auth/signup'
        element={
          <>
            <PageTitle title='SignUp || Admin Dashboard' />
            <SignUp />
          </>
        }
      />

    </Routes>
  )
}

export default App
