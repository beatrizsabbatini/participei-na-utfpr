import React, { createContext, ReactNode, useContext, useState } from "react";

interface SignUpFormProps{
  errors: any[];
  values: any;
}

interface SignUpFormProviderProps{
  children: ReactNode;
}

const SignUpFormContext = createContext({} as SignUpFormProps);

function SignUpFormProvider({children, }: SignUpFormProviderProps){
  const [errors, setErrors] = useState<any[]>([]);
  const [values, setValues] = useState<any>();

  return(
    <SignUpFormContext.Provider 
      value={{
        values,
        errors
      }}
    >
      { children }
    </SignUpFormContext.Provider>
  )
}

const useSignUpForm = () => {
  const context = useContext(SignUpFormContext);

  return context;
}

export { SignUpFormProvider, useSignUpForm };