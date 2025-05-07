import {createContext, useState} from 'react';

export const AppContext = createContext(null);
const Index = ({children}) => {
    // These are modal declaration states
    const [showPendingUserDetails, setShowPendingUserDetails] = useState(false);
    const [showMoreAction, setShowMoreAction] = useState(false);
    // const [showSuccess, setShowSuccess] = useState(false);
    // const [showWarning, setShowWarning] = useState(false);
    // const [showReason, setShowReason] = useState(false);
    // const [showRejectionSuccess, setShowRejectionSuccess] = useState(false);
    // console.log(showPendingUserDetails);
  return (
   
    <AppContext.Provider value={{showPendingUserDetails, setShowPendingUserDetails, showMoreAction, setShowMoreAction}}>
        {children}
    </AppContext.Provider>
    
  )
}

export default Index

// 