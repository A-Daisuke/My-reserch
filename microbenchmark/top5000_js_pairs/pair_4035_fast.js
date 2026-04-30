const Benchmark = {
    run: function() {
        var VAR_1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 716, 243, 0, 1];
        function FUNCTION_1(VAR_2) {
          var VAR_3 = "matrix3d(";
          for (var VAR_4 = 0; VAR_4 < 15; VAR_4++) {
            VAR_3 += VAR_2[VAR_4] < 0.000001 && VAR_2[VAR_4] > -0.000001 ? "0," : VAR_2[VAR_4] + ",";
          }
          VAR_3 += VAR_2[15] + ")";
          return VAR_3;
        }
        FUNCTION_1(VAR_1);
    }
};