const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 100000; ++VAR_4) {
          VAR_1.push(VAR_4);
          VAR_2.push(-VAR_4);
          VAR_3.push(VAR_4 + VAR_4 + 1);
        }
        function FUNCTION_1(VAR_5, VAR_6) {
          for (var VAR_7 = 0, VAR_8 = VAR_6.length; VAR_4 < VAR_8; VAR_4++) {
            VAR_5.push(VAR_6[VAR_4]);
          }
        }
        VAR_1.push.apply(VAR_1, VAR_2);
        VAR_1.push.apply(VAR_1, VAR_3);
        VAR_1.push.apply(VAR_1, VAR_2);
    }
};