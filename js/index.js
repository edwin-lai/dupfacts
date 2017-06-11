(function () {
  document.getElementById('submitDUPFactForm').addEventListener('submit', function (e) {
    var children = e.target.children;
    for (var i = 0; i < children.length; i++) {
      if (children[i].type === 'text') {
        children[i].value = '';
      }
    }
  })
}());
