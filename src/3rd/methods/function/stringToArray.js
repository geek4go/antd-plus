define(function() {
  return function(value) {
    return (value || '').split(/\s+/g);
  };
});
