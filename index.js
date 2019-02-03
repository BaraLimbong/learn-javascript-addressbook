console.log('address book')
//-----------------------
let contacts = [
  {
    id: 1,
    name: 'bara',
    phone: '08111',
    email: 'bara@gmail.com'
  },
  {
    id: 2,
    name: 'jo',
    phone: '08222',
    email: 'jo@gmail,com'
  }
]

let newId = 2
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
      id: newId + 1,
      name,
      phone,
      email
    })

    newId = newId + 1
  },

  deleteContact: function(name) {
    const newContacts = contacts.filter(contact => {
      return contact.name !== name
    })
    contacts = newContacts
  }
}

addressbook.displayContacts()
addressbook.addContact('sakti', '087777', 'saktisak@gmail.com')
addressbook.displayContacts()
addressbook.deleteContact('bara')
