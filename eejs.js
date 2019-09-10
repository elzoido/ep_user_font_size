var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_mySettings = function (hook_name, args, cb)
{
  args.content = args.content + eejs.require('ep_user_fontsize_version_2/templates/user_font_sizeSettings.ejs', {settings : false});
  return cb();
}
