console.log('address book')
//-----------------------
let contacts = [
  {
    name: 'bara',
    phone: '08111',
    email: 'bara@gmail.com'
  },
  {
    name: 'jo',
    phone: '08222',
    email: 'jo@gmail,com'
  }
]
const addressbook = {
  displayContacts: function() {
    contacts.forEach(contact => {
      console.log(contact)
    })
  },

  addContact: function(name, phone, email) {
    console.log('addcontact')
    console.log(name, phone, email)
    contacts.push({
      name,
      phone,
      email
    })
  }
}

addressbook.displayContacts()
addressbook.addContact('sakti', '087777', 'saktisak@gmail.com')
addressbook.displayContacts()
