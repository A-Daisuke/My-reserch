const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          var VAR_4;
          for (VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {
            VAR_2.call(VAR_3, VAR_1[VAR_4]);
          }
        }
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_5.push(VAR_6);
        }
        var VAR_7 = 0;
        FUNCTION_1(VAR_5, function (VAR_8) {
          VAR_7 += VAR_8;
        });
    }
};