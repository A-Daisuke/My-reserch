const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        try {
          for (var VAR_1 = 0; VAR_1 < 10; VAR_1++) {
            FUNCTION_1();
          }
        } catch (VAR_2) {}
    }
};