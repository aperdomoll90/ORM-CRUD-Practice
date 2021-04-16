const admin =require('firebase-admin')

const credentials = require('./credentials.json')
admin.initializeApp({
    credential:admin.credential.cert(credentials)
})

const db = admin.firestore()

// now we can run CRUD

db.collection('products').get()
.then(collection => {
    collection.forEach(doc => {
        console.log(doc.data())
    })
})
.catch(err => console.log('ERROR GETTING PRODUCT:', err))