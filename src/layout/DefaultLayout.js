import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { useDispatch } from 'react-redux';
import { fetchAgents } from '../views/Actions/Action';
const DefaultLayout = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAgents());
  }, [dispatch]);

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        {/* <AppFooter /> */}

        
      </div>
    </div>
  )
}

export default DefaultLayout
