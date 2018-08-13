#Send SMS APP#

The app is hosted on github pages at https://abhinavpreetu.github.io/sendOtp/.

This is a simple SPA built using - 
1. React.js
2. React Router 4
2. Express js
4. Nexmo

### FrontEnd ###
The frontend is built using React.js and CSS3.

* I have a base component App which has two sub-components
1. **Navbar - ** It consists of the tabs for the application. It has <Link> tags for routing to a particular route.
    Any number of tabs can be added to this component.
2. **Main - ** It consists of all the components that render data. <Route> tag is used to render all the components.

The state is maintained in index.js file. And all the components are passed data from the index.js file. I have tried to avoid "props drilling"
in the code.
Main components consists of two routes - _Contacts_ and _SentMessages_.
**Contacts** component is a parent component consisting of three nested routes:
1. _/list_ : It is a stateless component. It displays all the list of contacts available. The contacts are fetched via an API call to a hosted JSON file.
             Each list item is a <Link> tag that opens the details page for that contact.
2. _/details_ : It is a stateless component. It displays the details of a particular contact. Whenever a contact is selected, I update a variable in state. The _Details_ 
                component accesses that variable to display the contact.
3. _/send_ : It is a stateful component. It has a random function to generate OTP which I store in a variable in the component for persisting its
             value. It consists of a message property in state which is binded to the input box in the UI. It has a send button which on 
             clicking calls and API to send SMS to a given number. I have only used one number for all contacts as I whitelisted that number only.
             On successfully sending the SMS I show an alert for confirmation and save the details in LocalStorage for rendering them later.
*SentMessages* component is also a stateful component that on mount fetches the list of sent messages from the local storage and save in the
state in messageList property. This property is used to render the list of sent messages in the UI.

### BackEnd ###
The backend is build on Express.

I have hosted the app on heroku. I am using the _body-parser_ and _nexmo_ modules. The **body parser** is used to read the body from the request
body received from the FronEnd. The **nexmo** module is used to send the SMS to a given number. I have created a trial account on nexmo.
I have added headers to 'Allow-Control-Allow-Origin' for the homepage of my app. I am sending errors if I encounter error while sending
SMS.
