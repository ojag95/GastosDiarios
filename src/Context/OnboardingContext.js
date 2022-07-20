import React, { createContext, useState } from 'react'

export const OnBoardingContext = createContext();

const OnBoardingProvider = ({children})=>{
    const [isOnBoardingVisible, setIsOnBoardingVisible] = useState(true)

    const setOnBoardingVisible=()=>{
        setIsOnBoardingVisible(true)
    }
    const setOnBoardingNoVisible=()=>{
      setIsOnBoardingVisible(false)
  }
    return(
        <OnBoardingContext.Provider value={{isOnBoardingVisible,setOnBoardingVisible,setOnBoardingNoVisible}}>
        {children}
        </OnBoardingContext.Provider>
    )
}

export default OnBoardingProvider