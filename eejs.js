const eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content += eejs.require('ep_user_font_size/templates/user_font_sizeToolbar.ejs', {settings: false});
  return cb();
};
