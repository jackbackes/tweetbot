



function TwitterBot(name, commands, watchers) = {
  this.commands = {};
  this.watchers = [];
  this.options = {};
}

TwitterBot.prototype.tweet = function() {};
TwitterBot.prototype.reTweet = function() {};
TwitterBot.prototype.respond = function() {};
TwitterBot.prototype.readTweet = function() {};
TwitterBot.prototype.readTweets = function() {};
TwitterBot.prototype.cmd = {
  add(){},
  remove(){},
  exec(){}
}
TwitterBot.prototype.watchers = {
  add(){},
  remove(){},
  ignore(){}
}
