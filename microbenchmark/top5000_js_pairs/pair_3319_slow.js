const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        (function () {
          function FUNCTION_1() {}
          for (var VAR_2 = VAR_1; VAR_2 >= 0; VAR_2--) FUNCTION_1();
        })();
    }
};