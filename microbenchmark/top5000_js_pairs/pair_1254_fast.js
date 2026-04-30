const Benchmark = {
    run: function() {
        var VAR_6 = this;
        var VAR_1 = {};
        function FUNCTION_1() {
          VAR_6.VAR_3 = 0;
          for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) {
            VAR_6.VAR_5 += VAR_4;
          }
          return VAR_6.VAR_3;
        }
        FUNCTION_1();
    }
};