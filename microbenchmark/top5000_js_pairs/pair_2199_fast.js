const Benchmark = {
    run: function() {
        var VAR_1 = {};
        function FUNCTION_1() {
          VAR_1.VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
            VAR_1.VAR_4 += VAR_3;
          }
          return VAR_1.VAR_2;
        }
        FUNCTION_1();
    }
};