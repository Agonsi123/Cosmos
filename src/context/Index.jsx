import {createContext, useState} from 'react';

export const AppContext = createContext(null);
const Index = ({children}) => {
    // These are modal declaration states
    const [showPendingUserDetails, setShowPendingUserDetails] = useState(false);
    const [showMoreAction, setShowMoreAction] = useState(false);
    const [showActiveUserDetails, setShowActiveUserDetails] = useState(false);
    const [showAuditIssueDetails, setShowAuditIssueDetails] = useState(false);
    
  return (
   
    <AppContext.Provider value={{showPendingUserDetails, setShowPendingUserDetails, showMoreAction, setShowMoreAction, showActiveUserDetails, setShowActiveUserDetails, showAuditIssueDetails, setShowAuditIssueDetails}}>
        {children}
    </AppContext.Provider>
    
  )
}

export default Index

// 