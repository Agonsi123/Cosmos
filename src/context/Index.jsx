import {createContext, useState} from 'react';

export const AppContext = createContext(null);
const Index = ({children}) => {
    // These are modal declaration states
    const [showPendingUserDetails, setShowPendingUserDetails] = useState(false);
    const [showVerify, setShowVerify] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [showReason, setShowReason] = useState(false);
    const [showRejectionSuccess, setShowRejectionSuccess] = useState(false);
    // console.log(showPendingUserDetails);
  return (
   
    <AppContext.Provider value={{showPendingUserDetails, setShowPendingUserDetails, showVerify, setShowVerify, showSuccess, setShowSuccess, showWarning, setShowWarning, showReason, setShowReason, showRejectionSuccess, setShowRejectionSuccess}}>
        {children}
    </AppContext.Provider>
    
  )
}

export default Index

// 