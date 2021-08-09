import React, { createContext, useState } from 'react';

type contextType = {
    visible: boolean,
    toggleVisible: () => void,
}

const HomeTabStateContext = createContext<contextType | undefined>(undefined);

const HomeTabProvider = ({ children }: { children: React.ReactNode }) => {
    const [visible, setVisible] = useState(true);
    const toggleVisible = () => setVisible(c => !c);
    return (
        <HomeTabStateContext.Provider value={{ visible, toggleVisible }}>
            {children}
        </HomeTabStateContext.Provider>
    )
}
const useHomeTab = () => {
    const context = React.useContext(HomeTabStateContext)
    if (context === undefined) {
        throw new Error('useHomeTab must be used within a HomeProvider')
    }
    return context;
}

export { HomeTabProvider, useHomeTab };