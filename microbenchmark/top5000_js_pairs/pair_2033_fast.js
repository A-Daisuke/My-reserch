const Benchmark = {
    run: function() {
        var VAR_2 = {};
        function FUNCTION_1() {
          var VAR_6 = {};
          VAR_6.VAR_3 = 0;
          for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
            VAR_6.VAR_5 += VAR_4;
          }
          return VAR_6.VAR_3;
        }
        FUNCTION_1();
    }
};