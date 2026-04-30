const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        var VAR_1 = 1000;
        var FUNCTION_3 = function (VAR_3) {
          for (var VAR_4 = 0; VAR_4 != VAR_3; ++VAR_4) FUNCTION_1();
        };
        FUNCTION_3(VAR_1);
    }
};