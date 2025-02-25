// To create a light and dark theme for our app

// context set up - using two hooks - useState and useContext
// context can provide any component (like pages) with props (state, data..)

//This is a client component because we are using hooks
"use client";

import { useState, createContext, useContext } from "react";


// sets up context with init values
const ThemeContext = createContext("light");


// To give ThemeContext to the Provider so all components have access to it.
// The provider wraps the app to make it have access to a specific feature  - eg. in Clerk we wrap our children with the ClerkProvider, so our whole app has access to authentication. 

// We are going to declare the theme state and context we want to provide, and return so that it is available outside of the function --> if the value is more than one element it needs to be stored in an object
export function ThemeProvider({ children }){
    const [theme, setTheme] = useState("light");
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// useContext allows any values declared in the provider to be accessible - doing this here means it is only done once - custom hook that combines context and provider

export function useTheme() {
    return useContext(ThemeContext);
}

