const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = "";
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) VAR_2 += "x";
          return VAR_2;
        }
        FUNCTION_1(10000)[5000];
    }
};