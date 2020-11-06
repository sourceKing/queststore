import { createContext, useState, useEffect } from 'react';
import { watchViewport, unwatchViewport } from 'tornis';

export const ViewportContext = createContext();

export const  ViewportProvider = ({ children }) => {
  
  const [vpSize, setVpSize] = useState(null);

  const updateValues = ({ size }) => {
    if(size.changed) {
      setVpSize(size.x);
    }
  }

  useEffect(() => {
    let isSame = true;
    if (isSame) watchViewport(updateValues);
    return () => {
      isSame = false;
      unwatchViewport(updateValues);
    };
  }, [updateValues]);


  
  return <ViewportContext.Provider value={[vpSize, setVpSize]}>
    {children}
  </ViewportContext.Provider>
}