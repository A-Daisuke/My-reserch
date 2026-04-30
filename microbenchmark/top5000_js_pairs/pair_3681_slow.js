const Benchmark = {
    run: function() {
        var FUNCTION_1 = function VAR_1() {
          var VAR_1 = 1,
            VAR_2 = 2,
            VAR_3 = true;
          function FUNCTION_2() {
            var VAR_4 = 2;
            VAR_5 = !VAR_3;
          }
          for (var VAR_6 = 0; VAR_6 < 100; VAR_6++) {
            FUNCTION_2(VAR_6, VAR_6 + 1, VAR_6 + 2);
          }
        };
        eval("(" + FUNCTION_1.toString() + ")()");
    }
};