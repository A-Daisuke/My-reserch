const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = "";
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2 += VAR_3 % 10 === 0 ? "\n" : "a";
          }
          return VAR_2;
        }
        var VAR_4 = FUNCTION_1(1000);
        var VAR_6 = VAR_4.split("\n"),
          VAR_7 = VAR_6[VAR_6.length - 1];
    }
};