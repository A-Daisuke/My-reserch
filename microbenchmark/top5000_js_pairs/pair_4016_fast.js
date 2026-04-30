const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3;
        for (VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        for (VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        function FUNCTION_1(VAR_4) {
          return VAR_4;
        }
        for (var VAR_5 = 0; VAR_5 < VAR_2.length; VAR_5++) {
          FUNCTION_1(VAR_2[VAR_5]);
        }
    }
};