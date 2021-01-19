exports.postAceInit = function (name, context) {
  const padOuter = $('iframe[name="ace_outer"]').contents();
  const padInner = padOuter.find('iframe[name="ace_inner"]');

  $('#user-font-size').change(function () {
    const newVal = `${20 + parseInt($(this).val())}%`;

    // line-height behaves weird, can't really solve it easily.
    // For now this bodge fix will do
    padInner.contents().find('body').css('line-height', newVal);
    padInner.contents().find('body').css('font-size', newVal);
  });
  
  $('#user-font-size-toolbar').change(function () {
    const newVal = `${20 + parseInt($(this).val())}%`;

    // line-height behaves weird, can't really solve it easily.
    // For now this bodge fix will do
    padInner.contents().find('body').css('line-height', newVal);
    padInner.contents().find('body').css('font-size', newVal);
  });
};
