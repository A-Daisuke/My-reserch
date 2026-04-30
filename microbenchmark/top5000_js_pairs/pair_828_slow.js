const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3 = 10000;
        for (var VAR_4 = 0; VAR_4 < VAR_3; ++VAR_4) {
          VAR_1.push(VAR_4);
          VAR_2.push(VAR_3 - VAR_4);
        }
        VAR_1.forEach(function (VAR_5, VAR_6) {
          for (var VAR_7 = 0, VAR_8 = VAR_2.length; VAR_7 < VAR_8; ++VAR_7) {
            VAR_2[VAR_7] - VAR_5;
          }
        });
    }
};