import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import MessageForm from './components/Forms/Form.Messages/formMessages'
import AfterFilter from './components/Forms/Form.AfterFilter/formAfterFilter'
import Form from './components/Forms/Form.personaldetails/form'
import FillReq from './components/Forms/Form.FillRequest/formFillRequest'
import Date from './components/helpcomponents/Calender/date'
import HomePage from "./components/Forms/HomePage/home";
import Login from './components/Forms/Connect/ConnectForm'
import CalenderForm from './components/Forms/FormCalender/formC'
import Signup from './components/Forms/Form.signup/signup'
import InformationForm from './components/Forms/Form.information/information'
import HistoryForm from './components/Forms/Form.history/history'
import ConnectForm from './components/Forms/Connect/ConnectForm'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        <Routes>


          <Route path="/" element={<App />}>
          <Route path="app" element={<App />}></Route>

            {/* <Route path="/" element={<Form />}></Route> */}
            {/* <Route path="login" element={<Login />} /> */}

            <Route path="formMessages" element={<MessageForm />} />
            <Route path="formAfterFilter" element={<AfterFilter />} />
            <Route path="formFillRequest" element={<FillReq />} />
            <Route path="form" element={<Form />} />
            <Route path="calender" element={<CalenderForm />} />
            <Route path="home" element={<HomePage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="information" element={<InformationForm />} />
            <Route path="history" element={<HistoryForm />} />
            <Route path="ConnectForm" element={<HomePage />} />


            {/* <Route path="" element={<HomePage />} /> */}

          </Route>
        </Routes>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
