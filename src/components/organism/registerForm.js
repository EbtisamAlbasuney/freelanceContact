import InputField from '../molecules/inputField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { signup } from '../../services/auth';




export const FormField = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'user namemust be less tham 15 char')
      .required('required'),
  
    email: Yup.string()
      .email('  email not vaild ')
      .required('required'),
 
  })

  return (
    <Formik
      initialValues={{
        
        name: '',
        email: '',
        
      }}
      validationSchema={validate}
      onSubmit={async (values, { setSubmitting }) => {
        await signup(values)
        setSubmitting(false);

      }}
    >

      {formik => (
        <Form action="#"
          className="text-center m-auto  justify-center md:m-auto " >
          <h2 className="my-10 lg:my-7 text-lg md:text-xl lg:text-2xl  " >Get In TOUCH </h2>

        

          <InputField 
    
            textFieldProps={{ name: 'name', placeholder: " UserName", type: "text" }} />

         

          <InputField
            textFieldProps={{ name: 'email', placeholder: " Email", type: "email" }} />

           <InputField
            textFieldProps={{ name: 'subject', placeholder: " Subject", type: "text" }} />
            <InputField
            textFieldProps={{ name: 'question', placeholder: " Ask Question?", type: "text" }} />
        
          <btn type='submit' className="border border-black  text-black text-lg md:text-xl lg:text-2xl mt-5  rounded w-28 h-8 md:w-32 md:h-9 lg:w-40 lg:h-10 ">Send</btn>


          




        </Form>

      )}

    </Formik>

  );
}

