const Benchmark = {
    run: function() {
        var VAR_1 = this;
        function FUNCTION_1() {
          var VAR_2 = this;
          VAR_2.VAR_3 = 0;
          for (var VAR_4 = 0; VAR_4 < 100000; VAR_4++) {
            VAR_2.VAR_5 += VAR_4;
          }
          return VAR_2.VAR_3;
        }
        FUNCTION_1();
    }
};