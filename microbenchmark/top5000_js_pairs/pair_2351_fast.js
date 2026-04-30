const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_3 = 0.5 * VAR_1;
          return;
        }
        var VAR_5 = Math.sqrt(2.220446049250313e-16);
        for (var VAR_4 = 0; VAR_4 < 10000; ++VAR_4) FUNCTION_1(VAR_5);
    }
};