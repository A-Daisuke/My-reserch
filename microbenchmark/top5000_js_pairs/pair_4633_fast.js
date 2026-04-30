const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_2;
        }
        function FUNCTION_2(VAR_4, VAR_5) {
          for (var VAR_6 = 0, VAR_7 = VAR_4.length; VAR_6 < VAR_7; VAR_6++) {
            VAR_5(VAR_4[VAR_6], VAR_6, VAR_4);
          }
        }
        var VAR_3 = new Array(100).join("SOMETHING").split("");
        FUNCTION_2(VAR_3, FUNCTION_1);
    }
};