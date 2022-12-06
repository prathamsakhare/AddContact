1) Make component files according to your ease 
2) Make a header for the App {Header.js}
3) Then make a form for Adding contacts {AddContact.js}
4) Add jsx inside the AddContact form, make two labels and two input fields one for email and one for name {AddContact.js}
    Code => 
    <div>
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name"></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="email"></input>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    </div>

5) make a dummy dataset, inside which name, id and email key values will be present {App.js}
    Code => 
        const contacts = [
    {
      id:1,
      name:"Pratham P. Sakhare",
      email:"prathampsakhare@gmail.com"
    },
    {
      id:2,
      name:"Nikhil Patil",
      email:"nikhilpatil@gmail.com"
    }
  ]


6) Export that contacts variable as props to the ContactList component {App.js && ContactList.js}
    Code => 
        <ContactList contacts = {contacts}/>

7) Now import those contacts inside the ContactList.js in the form of props and then make a function renderContactList for mapping all the contacts that are inside the contacts props, and make a jsx stucture for contact component to show it in proper format {ContactList.js}
    Code => 
        const renderContactList = props.contacts.map((contact) => {
        return(
            <div className='item'>
                <div className='content'>
                    <div className='header'>{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className='trash alternate icon'></i>
            </div>
        )
    })

8) Then render that function renderContactList inside the ContactList.js {ContactList.js}
    Code => 
    <div className='ui celled list'>
        {renderContactList}
    </div>

9) then move that jsx structure inside the new component that you've made that is ContactCard.js 
and then render that component inside the ContactList.js
but dont forget also to send props to ContactCard.js from ContactList.js while moving the jsx structure {ContactCard.js && ContactList.js}
    Code => 
<!-- Sending props to ContactCard.js from ContactList.js -->
const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact = {contact}/>
        )
    })
<!-- using props from ContactList.js inside ContactCard.js -->
        function ContactCard(props) {
            return (
                <div>
                    <div className='item'>
                            <div className='content'>
                                <div className='header'>{props.contact.name}</div>
                                <div>{props.contact.email}</div>
                            </div>
                            <i className='trash alternate icon'></i>
                        </div>
                </div>
            )
            }

<!-- TILL THIS TIME WE JUST GOT OUR STRUCTURE OF THE WEB APP DONE BY USING STATIC / DUMMY COMPONENTS -->
<!-- FROM HERE ONWARDS WE ARE GOING TO ADD FUNCTIONALITY -->

10) Now remove that static data from App.js that we have made in the form of variable named as contact 
Now instead of that We are going to make a new state for the contact component {App.js}
    Code => 
        const [contacts, setContacts] = useState([""])

11) Then go to the AddContact.js and then make the state of the name and email as empty {AddContact.js}
    Code => 
        state = {
            name:"",
            email:""
        }
12) Then add onChange event handlers to catch up the target value, also set the value of the name and email as empty as we have set that before (step 11)
    Code => 
        <!-- for name input field -->
        <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={this.state.name} 
            onChange={(e) => this.setState({name:e.target.value})}>
        </input>
        <!-- for email input field -->
        <input 
            type="text" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={(e) => this.setState({email:e.target.value})}>
        </input>

13) So after catching values we also need to submit the entire form so for that add onSubmit event in the form tag of AddContact.js {AddContact.js}
    Code => 
    <!-- adding an onSubmit event handler and declaring a function inside it (add function) -->
        <form className="ui form" onSubmit={this.add}>
    <!-- then code that function -->
    Code => 
        add = (e) => {
            <!-- this is the function for not reloading the page after submitting the value -->
            e.preventDefault()
            <!-- this is the condition where it tells that if any field from name/email is empty then it should show alert to that  -->
            if(this.state.name === "" || this.state.email === ""){
                alert("Please fill all the fields!")
                return 
            }
            <!-- this will print out the current state / filled state to the console -->
            console.log(this.state)
        }

14) Then we will pass the function as the prop from parent component to the child component, 
firstly we make a function inside the parent component and pass it with the same PROP name to the child component
        Code => 
        <!-- firstly we declare the function inside the prop -->
             <AddContact addContactHandler= {addContactHandler}/>
        <!--  -->
        const addContactHandler = (contact) => {
                console.log(contact)
            }
        <!-- then we can use it inside the child component and inside the onSubmit event function add so that when the form will submit this function will execute -->
        add = (e) => {
            e.preventDefault()
            if(this.state.name === "" || this.state.email === ""){
                alert("Please fill all the fields!")
                return 
            }
            <!-- here -->
            this.props.addContactHandler(this.state)
            <!-- then we set the state of the input field as empty string (after submitting the form) -->
            this.setState({name:"", email:""})
            
        }


15) Then get back to the function that we have sent as a props to the child component and code it in which set the current state of the contact as the contact that we are getting from props (and inside the child component we have set the parameter for the function as this.state so that it will give the current filled value to the function as the parameter inside the prop and then the function will import that parameter from child component to parent and inside the parent component we have given the parameter as the contact, so basically we have equalled the value of the parameter this.state in child component and the parameter contact inside the parent component as same) {App.js && AddContact.js}
    Code => 
        <!-- set the parameter value as the contact -->
        <!-- inside the parent component App.js -->
        const addContactHandler = (contact) => {
            <!-- parameter as contact -->
            console.log(contact)
        } 
        <!-- then go to the child component where that function is imported and set the parameter as the filled state -->
        this.props.addContactHandler(this.state)
        <!-- then come back to the component and set the current state of the contact as the parameter you've given to the function -->
        const addContactHandler = (contact) => {
            <!-- parameter as contact -->
            console.log(contact)
            setContacts([...contacts, contact])
        } 
