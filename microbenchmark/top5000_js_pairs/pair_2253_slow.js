const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * 10));
        }
        function FUNCTION_1(VAR_3, VAR_4) {
          var VAR_5;
          for (VAR_5 = 0; VAR_5 < VAR_3.length; VAR_5++) {
            VAR_4(VAR_3[VAR_5]);
          }
        }
        var VAR_6 = 0;
        FUNCTION_1(VAR_1, function (VAR_7) {
          VAR_6 += VAR_7;
        });
    }
};