const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (typeof FUNCTION_1.VAR_2 === "undefined") FUNCTION_1.VAR_2 = Math.sqrt(VAR_1);
          var VAR_3 = 0.5 * FUNCTION_1.VAR_2;
          return;
        }
        for (var VAR_4 = 0; VAR_4 < 10000; ++VAR_4) FUNCTION_1(2.220446049250313e-16);
    }
};