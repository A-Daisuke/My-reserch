const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(VAR_2);
        var VAR_3, VAR_4;
        VAR_4 = (function () {
          var VAR_5, VAR_6, VAR_7;
          VAR_7 = [];
          for (VAR_2 = 0, VAR_6 = VAR_1.length; VAR_2 < VAR_6; VAR_2++) {
            VAR_3 = VAR_1[VAR_2];
            VAR_7.push(VAR_3 * 2);
          }
          return VAR_7;
        })();
    }
};