const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: Math.random() });
        }
        var VAR_3 = Math.max.apply(
          null,
          VAR_1.map(function (VAR_4) {
            return VAR_4.KEY_1;
          }),
        );
        var VAR_5 = null;
        for (var VAR_6 = 0, VAR_7 = VAR_1.length; VAR_2 < VAR_7; ++VAR_2) {
          if (VAR_1[VAR_2].KEY_1 === VAR_3) {
            VAR_5 = VAR_1[VAR_2];
            break;
          }
        }
    }
};