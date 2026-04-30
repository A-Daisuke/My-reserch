const Benchmark = {
    run: function() {
        new (function () {})();
        new (function () {
          return true;
        })();
        new (function (VAR_1) {
          var VAR_2 = VAR_1.toLowerCase();
        })("FOO");
    }
};