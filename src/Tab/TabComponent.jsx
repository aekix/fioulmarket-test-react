import {Tab} from 'react-bootstrap';
import {Tabs} from 'react-bootstrap';
import RegistrationForm from '../Form/RegistrationForm';
import LoginForm from '../Form/LoginForm';
import './TabComponent.css'

function TabComponent() {
  return (
    <Tabs
      defaultActiveKey="login"
      id="tab"
    >
      <Tab eventKey="login" title="J'ai un compte" >
        <div className='content'>
            <LoginForm />
        </div>
      </Tab>
      <Tab eventKey="register" title="Je n'ai pas de compte" >
        <div className='content'>
            <RegistrationForm />
        </div>
      </Tab>
    </Tabs>
  );
}

export default TabComponent;