import { useFormikContext } from "formik";
import React, {useEffect} from 'react'



const FormikContext:React.FC<{isLogin: Boolean | undefined}> = ({isLogin}) => {
    const { resetForm } = useFormikContext();
    useEffect(() => {
      (isLogin || !isLogin) && resetForm();
    },[isLogin, resetForm]);
  
    return null;
  };

  export default FormikContext