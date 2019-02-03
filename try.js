let contacts = [
  {
    id: 1,
    nama: 'sakti',
    phone: '0871',
    alamat: 'jln pusing '
  },
  {
    id: 2,
    nama: 'boy',
    phone: '0856',
    alamat: 'jln liar'
  },
  {
    id: 3,
    nama: 'mas',
    phone: '08569',
    alamat: 'jln bisa'
  }
]
function display() {
  contacts.forEach(contact => {
    console.log(contact)
  })
}
function add(name, phone, alamat) {
  let contactLength = contacts.length
  contactLength += 1
  let newContact = {
    id: contactLength,
    nama: name,
    phone,
    alamat
  }
  contacts.push(newContact)

  console.log(contacts)
}

function deleteContact(deleteid) {
  let deleted = contacts.map(contact => {
    if (contact.id !== deleteid) {
      let save = contact
      return save
    }
  })
  contacts = deleted
  console.log(contacts)
}
add('yopi', '0002', 'jl kerta')
add('bab', '414234', 'ivan')
add('ari', '089', 'ari@mail')
deleteContact(6)
display()
display()
