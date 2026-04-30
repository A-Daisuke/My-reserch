const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = Array(VAR_2).fill(VAR_1);
          return VAR_3.join("");
        }
        function FUNCTION_2(VAR_4, VAR_5) {
          var VAR_6 = "";
          for (var VAR_7 = 0; VAR_7 < VAR_5; VAR_7++) {
            VAR_6 += VAR_4;
          }
          return VAR_6;
        }
        var VAR_8 = FUNCTION_2("y", 100000);
    }
};