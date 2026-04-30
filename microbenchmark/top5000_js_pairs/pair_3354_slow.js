const Benchmark = {
    run: function() {
        var VAR_1 = "blah",
          VAR_2 = 1000;
        function FUNCTION_1() {
          var VAR_3 = "";
          for (var VAR_4 = 0, VAR_5 = arguments.length; VAR_4 < VAR_5; VAR_4++) {
            VAR_3 += arguments[VAR_4];
          }
          return VAR_3;
        }
        var VAR_6 = "";
        var VAR_7 = VAR_2;
        while (VAR_7--) {
          VAR_6 += VAR_1;
          VAR_6 += VAR_1;
          VAR_6 += VAR_1;
          VAR_6 += VAR_1;
          VAR_6 += VAR_1;
        }
    }
};