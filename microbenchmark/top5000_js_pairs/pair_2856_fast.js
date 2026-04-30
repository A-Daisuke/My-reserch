const Benchmark = {
    run: function() {
        function FUNCTION_3(VAR_12, VAR_13, VAR_14) {
          var VAR_15 = new Float32Array(3);
          VAR_15[0] = VAR_12;
          VAR_15[1] = VAR_13;
          VAR_15[2] = VAR_14;
          return VAR_15;
        }
        function FUNCTION_4(VAR_16, VAR_17) {
          VAR_16[0] += VAR_17[0];
          VAR_16[1] += VAR_17[1];
          VAR_16[2] += VAR_17[2];
          return VAR_16;
        }
        var VAR_18 = FUNCTION_3(1, 2, 3);
        var VAR_19 = FUNCTION_3(4, 5, 6);
        for (var VAR_11 = 0; VAR_11 < 1000; ++VAR_11) {
          FUNCTION_4(VAR_18, VAR_19);
        }
    }
};