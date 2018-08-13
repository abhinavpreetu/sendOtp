import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import Main from './components/main';
import Contacts from './components/contacts';
import ListOfContacts from './components/listOfContacts';
import Details from './components/details';
import Navbar from './components/navbar';
import SendMessage from './components/sendMessage';
import MessageList from './components/messageList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      selectedContact: {}
    }
    this.handleClick = this.handleClick.bind(this);
    this.selectContact = this.selectContact.bind(this);
  }

  handleClick() {
    axios.get('https://www.json-generator.com/api/json/get/ceXehHJLvS?indent=2')
      .then(({ data }) => this.setState({ contacts: data }))
      .catch(err => console.log(err))
  }

  selectContact(contact) {
    this.setState({ selectedContact : { ...contact } });
  }

  render() {
    const { contacts, selectedContact } = this.state;
    return (  
      <React.Fragment>
        <Navbar />
        <Main>
          <Switch>  
            <Redirect exact from='/contacts' to='/contacts/list' />
            <Route path="/contacts" render={() => 
              <Contacts selectedContact={selectedContact} >
                <Route exact path="/contacts/list" render={()=><ListOfContacts contacts={contacts} selectContactHandler={this.selectContact} />}></Route>
                <Route exact path="/contacts/details" render={()=><Details selectedContact={selectedContact} />}></Route>
                <Route exact path="/contacts/send" render={()=><SendMessage selectedContact={selectedContact} />}></Route>
              </Contacts>
            }>
            </Route>
            <Route path="/sentMessages" component={MessageList} />
          </Switch>
        </Main>
      </React.Fragment>
    )
  }
  
  componentWillMount() {
    this.handleClick();
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
  , rootElement);
