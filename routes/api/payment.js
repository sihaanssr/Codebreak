const stripe = require("stripe")("sk_test_ybViH0KKcVFqm5FMXrBN1BpS000FZPP3Au");
const express = require("express");
const router = express.Router();

router.get("/paypage", (req, res) => {
  res.render("payment");
});

router.post("/charge", (req, res) => {
  var token = req.body.stripeToken;
  var chargeAmount = req.body.chargeAmount;
  var charge = stripe.charges.create(
    {
      amount: chargeAmount,
      currency: "gbp",
      source: token
    },
    (err, charge) => {
      if (err === "StripeCardError") {
        console.log("Your card was declined");
      }
    }
  );

  console.log("Your payment was successful");
  res.render("index");
});

module.exports = router;
