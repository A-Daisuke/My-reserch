const Benchmark = {
    run: function() {
        var VAR_5 = Math.sqrt(2.220446049250313e-16);
        function FUNCTION_1() {
          var VAR_3 = 0.5 * VAR_5;
          return;
        }
        for (var VAR_4 = 0; VAR_4 < 10000; ++VAR_4) FUNCTION_1();
    }
};