import React, { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import Allroutes from './Routes/Allroutes';


function App() {
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
   setIsLoading(false);
 }, []);

 return (
   <>
     {isLoading ? (
       <Loader onLoadingComplete={() => setIsLoading(false)} />
     ) : (
       <>

         <Allroutes />
         
       </>
     )}
   </>
 );
}

export default App;