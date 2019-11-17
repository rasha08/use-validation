
# use-validation  
  
> collection of react validation hooks   
[![NPM](https://img.shields.io/npm/v/use-validation.svg)](https://www.npmjs.com/package/use-validation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  
  
## Install  
  
```bash  
npm install use-validation-hooks
```  

## About 

`use-validation` is a small validation library (*1.2kb gzipped*), created to provide basic validators for some of the most common usages. 

**Validation Result** is error message or `null`


Besides these core validators that come with the package, you can always extend some validators or create specialization of one. That is how `useEmailValidator` or `useUrlValidator` sre created;

```tsx
import { useStringValidator } from "./useStringValidator";  
import { RequiredValidatorProps } from "./useRequiredValidator";  
  
const emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  
export const useEmailValidator = ({  
  label,  
  required = true  
}: RequiredValidatorProps): ((value: string) => string | null) => {  
  return useStringValidator({ label, required, regex: emailRegex });  
};
```

## Available Validators
  
  ``` useEmailValidator: ({ label, required }: RequiredValidatorProps) => (value: string) => string | null; ```
  ___
```useDateValidator: ({ label, required, min, max, between }: DateValidatorProps) => (value: Date) => string | null;```
___
```useFileValidator: ({ label, required, max, allowedExtensions }: FileValidatorProps) => (value: File) => string | null;```
___
```useNumberValidator: ({ label, required, min, max }: NumberValidatorProps) => (value: number) => string | null;```
___
``` useRequiredValidator: ({ label, required }: RequiredValidatorProps) => (value: string | number | any[] | Date | File) => string | null;```
___
```useStringValidator: ({ label, required, min, max, regex }: StringValidatorProps) => (value: string) => string | null;```
___
```useUrlValidator: ({ label, required }: RequiredValidatorProps) => (value: string) => string | null;```

## Availbable Features And Roadmap

 - [x] Value Validation
 - [ ] Custom error message formats
 - [ ] i18n support  

## Example  
  
```tsx  
import React, {useEffect, useState} from 'react'
import { useStringValidator } from 'use-validation-hooks'  
    
export const App = () => {
  const [name, setName] = useState('')  
  const [nameFieldError, setNameValidity] = useState(null)  
  
  const validateName = useStringValidator({ label: 'Name', required: true, min: 6, max: 12 }); 
  
  const onNameChange = ({ target: { value } }) => setName(value);  
  
  useEffect(() => {  
    setNameValidity(validateName(name))  
  }, [name])
  
  return (  
    <div>  
      <h1>{ !nameFieldError ? 'Name is  VALID' : nameFieldError  }</h1>  
      <input type={'text'} value={name} onChange={onNameChange} />  
   </div>  
  )
}
```  
  
## License  
  
MIT © [rasha08](https://github.com/rasha08)

## Authors
[Radovan Stevanovic](https://github.com/rasha08)

[Aleksandar Ilic](https://github.com/clili93)
