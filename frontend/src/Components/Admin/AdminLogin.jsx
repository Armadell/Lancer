/* eslint-disable no-debugger */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, React } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../schemas';

import axiosInstance from '../../Axios/axiosPrivate';

import { adminData } from '../../Redux/adminreducer';

function AdminLogin() {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };
  // eslint-disable-next-line operator-linebreak
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, actions) => {
        try {
          const response = await axiosInstance.post('/login/', {
            email: values.email,
            password: values.password,
          });
          console.log(response.data);

          dispatch(adminData(response.data));

          navigate('/dashboard');
        } catch (err) {
          if (err.response) {
            setErrorMessage('Invalid Credentials');
            console.log('first check', err.response);
          } else if (err.request) {
            console.log('seconcd check', err.request);
          } else {
            console.log('anything else');
          }
        }
        actions.resetForm();
      },
    });
  console.log(values);
  console.log(errors);
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Admin Login
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error text-red-600">{errors.email}</p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error text-red-600">{errors.password}</p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;
