const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1(VAR_3, VAR_4) {
          for (var VAR_5 = 0; VAR_2 < VAR_1.length; VAR_2++) {
            VAR_4(VAR_1[VAR_2]);
          }
        }
        FUNCTION_1(VAR_1, function (VAR_6) {
          VAR_7 += VAR_6;
        });
    }
};