const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1() {
          var VAR_3 = 0;
          for (var VAR_5 = 0; VAR_2 < VAR_1.length; VAR_2++) {
            VAR_3 += VAR_1[VAR_2];
          }
          return VAR_3;
        }
        FUNCTION_1();
    }
};