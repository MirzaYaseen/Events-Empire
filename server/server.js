
const stripe = require('stripe')('sk_test_51MACsuEeF1FeJASqeW1knZ52KJ8uLgljFLKqx1DZz8ESMNYiSxXU1AJkntFBvf8fTE4f2sR7DPYBS1vQf2fJmw3W00oTK5PU52')

const express =  require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Events Empire listening you at:")
})
app.post('/payment-sheet', async (req, res) => {
    // Use an existing Customer ID if this is a returning customer.

    const {amount, currency} = req.body
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2022-11-15'}
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customer.id,
      payment_method_types: ['card'],
    });
  
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
     
    });
  });
app.listen(4002, ()=> console.log("Listening you at http://localhost:4002"))