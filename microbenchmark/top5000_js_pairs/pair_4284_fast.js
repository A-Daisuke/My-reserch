const Benchmark = {
    run: function() {
        var VAR_1 = parseInt(Math.random() * 4294967295, 10);
        function FUNCTION_1(VAR_2) {
          VAR_2 >>>= 0;
          for (var VAR_3 = 0; VAR_2; VAR_2 &= VAR_2 - 1) {
            VAR_3++;
          }
          return VAR_3;
        }
        FUNCTION_1(VAR_1);
    }
};