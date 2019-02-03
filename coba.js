console.log('address book')
//-----
let namasiswa = [
  {
    nik: 1,
    nama: 'tommy',
    telpon: '0817',
    email: 'tommy@gmail'
  },
  { nik: 2, nama: 'joe', telpon: '0818', email: 'joe@mail' }
]
let newNIK = 2
const bukusekolah = {
  displayNamasiswa: function() {
    namasiswa.forEach(contact => {
      console.log(contact)
    })
  },

  addContact: function(nama, telpon, email) {
    console.log('addContact')
    console.log(nama, telpon, email)
    namasiswa.push({
      nik: newNIK + 1,
      nama,
      telpon,
      email
    })
    newNIK = newNIK + 1
  },
  deleteContact: function(newNIK) {
    const newNamasiswa = namasiswa.filter(contact => contact.nik !== newNIK)
    namasiswa = newNamasiswa
    bukusekolah.displayNamasiswa()
  }
}

bukusekolah.displayNamasiswa()
bukusekolah.addContact('bara', '0817', 'lim@mail')
bukusekolah.displayNamasiswa()
