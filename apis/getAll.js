const MessageModel = require('../models/message.model');

const getUsername = require('../services/getUsername.service');

const getAll = (headers) => {
  const username = getUsername(headers);

  return MessageModel.find({
    from: username
  }, '-_id from to text')
    .sort('-created_at')
    .limit(Number(process.env.LIMIT_MESSAGES));
};

module.exports = getAll;