import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home/home";
import Privacy from "./container/PrivacyPolicy/Privacy";
import Refund from "./container/RefundAndCancellation/Refund";
import Term from './container/TermsofUse/Term'
import About from "./container/About/About";
import Signin from "./container/Registration/Signin/SignIn";
import Signup from './container/Registration/Signup/Signup';
import Carrer from "./container/Carrer/Carrer";
import MockTest from './container/MockTest/MockTest';
import Course from "./container/Course/Course";
import Instructions from './container/MockTest/Instructions/Instructions'
import Questions from "./container/MockTest/Exam/questions";
import Submit from "./container/MockTest/SubmitPage/Submit";
import Course1 from "./container/Course/Clat/Course1";
import Course2 from "./container/Course/Clat/Course2";
import Course3 from "./container/Course/Clat/Course3";
import Course4 from "./container/Course/Clat/Course4";
import Course5 from "./container/Course/Clat/Course5";
import Notify from './container/Course/Notify';
import UserProfile from './container/UserProfile/UserProfile';
import BuyCourse from "./container/BuyCourse/BuyCourse";
import PDFViewer from './container/Course/PDF/PDFRender';
import Previous from "./container/MockTest/CLAT/Previous";
import HTMLRender from "./container/Course/HTML/HTMLRender";
import DummyLink1 from "./container/Course/HTML/DummyLink1";
import DummyLink2 from "./container/Course/HTML/DummyLink2";

function App() {
  
  return (
    <>
      {/* <Privacy/> */}
      {/* <Refund/> */}
      {/* <Home /> */}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/privacy-policy" component={Privacy} />
        <Route path="/refund-policy" component={Refund} />
        <Route path="/terms-of-service" component={Term} />
        <Route path="/about" component={About} />
        <Route path='/signin' component={Signin}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/carrer' component={Carrer}/>
        <Route path='/mock-test' exact component={MockTest}/>
        <Route path='/course' exact component={Course}/>
        <Route path='/mock-test/instructions' component={Instructions}/>
        <Route path='/mock-test/questions/:handle' component={Questions}/>
        <Route path='/mock-test/result' component={Submit}/>
        <Route path='/course/clat/course-1' component={Course1}/>
        <Route path='/course/clat/course-2' component={Course2}/>
        <Route path='/course/clat/course-3' component={Course3}/>
        <Route path='/course/clat/course-4' component={Course4}/>
        <Route path='/course/clat/course-5' component={Course5}/>
        <Route path='/course/notify-me' component={Notify} />
        <Route path='/profile' component={UserProfile}/>
        <Route path='/buy-course/:handle' component={BuyCourse}/>
        <Route path ='/course/clat/pdf' component={PDFViewer}/>
        <Route path ='/mock/previous' component={Previous}/>
        <Route path='/mock/:handle' component={HTMLRender}/>
        <Route path="/dummyLink2" component={DummyLink1}/>
        <Route path="/dummyLink1" component={DummyLink2}/>
      </Switch>
    </>
  );
}

export default App;
