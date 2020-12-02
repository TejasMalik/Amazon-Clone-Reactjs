const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require('express')
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51HtdUQIYEeNurv9ncO7yJQm3rqJjdYIweXombNpJsYoxM1mDzQUii6PsSo9PWWenLI3xUkkwlx5vXTGPxr3g1RUX00yfucu7RF')


const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log('Payment', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)