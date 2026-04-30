const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        for (var VAR_1 = 0; VAR_1 < 10; VAR_1++) {
          try {
            FUNCTION_1();
          } catch (VAR_2) {}
        }
    }
};