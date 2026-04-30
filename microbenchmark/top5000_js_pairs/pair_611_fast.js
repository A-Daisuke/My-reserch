const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: Math.random() });
        }
        var VAR_6 = Math.max.apply(
          null,
          VAR_1.map(function (VAR_7) {
            return VAR_7.KEY_1;
          }),
        );
        var VAR_8 = null;
        for (var VAR_9 = 0, VAR_10 = VAR_1.length; VAR_2 < VAR_10; ++VAR_2) {
          if (VAR_1[VAR_2].KEY_1 === VAR_6) {
            VAR_8 = VAR_1[VAR_2];
            break;
          }
        }
    }
};