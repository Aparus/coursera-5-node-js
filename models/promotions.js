// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image:  {
        type: String,
        required: true
    },
    label:  {
        type: String,
        default: ""
    },
    price:  {
        type: Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});


// the schema is useless so far
// we need to create a model using it
var Promotions = mongoose.model('Promotion', promotionSchema);

// make this available to our Node applications
module.exports = Promotions;

/*
 {
      "name": "Weekend Grand Buffet",
      "image": "images/buffet.png",
      "label": "New",
      "price": "19.99",
      "description": "Featuring . . ."
}
*/