const admin =require('firebase-admin')

const credentials = require('./credentials.json')
admin.initializeApp({
    credential:admin.credential.cert(credentials)
})

const db = admin.firestore()

// now we can run CRUD

db.collection('products').get()
.then(collection => {
    let productArray = []
   collection.forEach(doc => {
        const thisData = doc.data()
        const thisProduct = {
            id: doc.id,
            name: thisData.name || thisData.Name,
            category: thisData.category || thisData.Category,
            vendor: thisData.vendor || thisData.Vendor,
        }
        thisProduct.id = doc.id
        productArray.push(thisProduct)
    })
    console.log(productArray)
})
.catch(err => console.log('ERROR GETTING PRODUCT:', err))