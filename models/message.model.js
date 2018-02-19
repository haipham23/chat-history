const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const MessageSchema = new mongoose.Schema({
  from: {
    type: String,
    required: [true, 'Missing From']
  },
  to: {
    type: String,
    required: [true, 'Missing To']
  },
  text: {
    type: String,
    required: [true, 'Missing Content']
  }
});

MessageSchema.plugin(timestamps);

MessageSchema.index({ from: 'text', to: 'text', text: 'text' });

module.exports = mongoose.model('Message', MessageSchema);
