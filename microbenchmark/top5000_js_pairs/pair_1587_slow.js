const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_2;
        }
        function FUNCTION_2(VAR_3) {
          return new Array(VAR_3).join(" \n").split("\n").map(FUNCTION_1);
        }
        function FUNCTION_3(VAR_4) {
          for (VAR_5 = 0, VAR_6 = []; VAR_5 < VAR_4; VAR_1.push(VAR_5++)) {}
          return VAR_1;
        }
        FUNCTION_2(10000);
    }
};