const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = "";
          for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) VAR_3 += VAR_1;
          return VAR_3;
        }
        var VAR_5 = FUNCTION_1("x", 1000),
          VAR_6 = VAR_5;
        var VAR_7 = FUNCTION_1("x", 100000),
          VAR_8 = VAR_7;
        var VAR_9 = 100;
        VAR_8 = VAR_8 + VAR_7;
        VAR_7.length;
    }
};