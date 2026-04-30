const Benchmark = {
    run: function() {
        !(function () {})();
        !(function () {
          return true;
        })();
        !(function (VAR_1) {
          var VAR_2 = VAR_1.toLowerCase();
        })("FOO");
    }
};