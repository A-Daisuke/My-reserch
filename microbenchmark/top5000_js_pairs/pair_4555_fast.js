const Benchmark = {
    run: function() {
        var VAR_1 = (function () {
          function FUNCTION_1(VAR_2) {
            var VAR_3 = VAR_2;
            return { KEY_1: VAR_3 };
          }
          return FUNCTION_1;
        })();
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          var VAR_5 = VAR_1("myOName");
        }
    }
};