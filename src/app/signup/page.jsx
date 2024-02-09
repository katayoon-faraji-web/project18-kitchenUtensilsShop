'use client'
import Link from "next/link";
import { useEffect, useRef ,useState} from "react"
import { useFormik } from 'formik';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { redirect } from 'next/navigation'



const SignUp = () =>{
    const inp1 = useRef()
    const inp2 = useRef()
    const inp3 = useRef()
    const error = useRef()
    const success = useRef()
    function signup(){
        let flag = 0
        fetch('https://6595591004335332df8287f5.mockapi.io/users', {
            method: 'GET',
            headers: {'content-type':'application/json'},
            }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
            }).then(tasks => {
            // Do something with the list of tasks
                tasks.forEach((val)=>{
                    if((inp1.current.value)==val.username || (inp2.current.value)==val.email){
                        flag++
                    }
                })
                if(flag!=0){
                    error.current.style.display = 'block'
                    success.current.style.display = 'none'
                }else{
                    error.current.style.display = 'none'
                    const user = {
                        username:inp1.current.value,
                        email:inp2.current.value,
                        password:inp3.current.value,
                    }
                    fetch('https://6595591004335332df8287f5.mockapi.io/users', {
                        method: 'POST',
                        headers: {'content-type':'application/json'},
                        // Send your data in the request body as JSON
                        body: JSON.stringify(user)
                        }).then(res => {
                        if (res.ok) {
                            success.current.style.display = 'block'
                            error.current.style.display = 'none'
                            redirect('/login')

                        }
                        // handle error
                        }).then(task => {
                        // do something with the new task
                            
                        }).catch(error => {
                        // handle error
                        })
                    }
           
            })
    }
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
        if (!values.username) {
          errors.username = 'Required';
        } else if (!/^[a-z0-9_-]{3,15}$/i.test(values.username)) {
          errors.username = 'Invalid username address';
        }
        if (!values.password) {
            errors.password = 'Required';
          } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_]).{8,}$/i.test(values.password)) {
            errors.password = 'Invalid password address';
          }
      
        return errors;
      };
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            signup()
        },
        });
        
    return(
        <section className="w-full h-[100vh] relative flex justify-center items-center bg-[#faeddf]">
            <div className="w-[70%] lg:w-[30%] h-[500px] flex flex-wrap justify-center content-center font-primary relative z-30">
                <form onSubmit={formik.handleSubmit}>
                    <div ref={error} className="w-full hidden mb-4">
                       < BasicAlerts/>
                    </div>
                    <div ref={success} className="w-full hidden mb-4">
                       < BasicAlerts2/>
                    </div>
                    <input
                    ref={inp1}
                    name="username"
                    type="text"
                    placeholder="Username" className="w-full h-[50px] rounded-md border-stone-300 text-[20px] placeholder:text-[20px] placeholder:text-stone-300 bg-white text-black p-4"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    />
                    {formik.errors.username ? <div>{formik.errors.username}</div> : null}
            
                    <input
                    ref={inp2}
                    name="email"
                    type="email"
                    placeholder="email"  spellCheck={false} className="w-full h-[50px] rounded-md border-stone-300 text-[20px] placeholder:text-[20px] placeholder:text-stone-300 bg-white text-black p-4 my-4"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            
                    <input
                    ref={inp3}
                    name="password"
                    type="password"
                    placeholder="password"  spellCheck={false} className="w-full h-[50px] rounded-md border-stone-300 text-[20px] placeholder:text-[20px] placeholder:text-stone-300 bg-white text-black p-4"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            
                    <button type="submit" className="w-full mt-4 h-[40px] bg-[#0f5643] text-[#faeddf] text-[20px] rounded-md cursor-pointer transition-all duration-500 hover:bg-[#faeddf] hover:text-[#0f5643] hover:border-2 hover:border-[#0e5540]">Sign up</button>
                </form>
                <span className="mt-4">have an account? <Link href={'/login'} className="text-[#0f5643] underline">Log in</Link></span>
              
            </div>
            <div className="w-[400px] h-[300px] absolute bottom-0 left-0 bg-[url('https://greatjonesgoods.com/cdn/shop/files/login2_800x600.jpg')] bg-contain bg-no-repeat"></div>

            
        </section>
    )

}
export default SignUp

function BasicAlerts() {
    return (
      <Stack sx={{ width: '100%' }} spacing={4}>
        
        <Alert severity="error">there is an account with this information !</Alert>
      </Stack>
    );
}
function BasicAlerts2() {
    return (
      <Stack sx={{ width: '100%' }} spacing={4}>
        <Alert severity="success">sign up successful.</Alert>
        
      </Stack>
    );
   }





 