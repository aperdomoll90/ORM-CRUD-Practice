const admin =require('firebase-admin')

const credentials = require('./credentials.jason')
admin.initializeApp({
    credential:admin.credential.cert(credentials)
})

const db = admin.firestore()