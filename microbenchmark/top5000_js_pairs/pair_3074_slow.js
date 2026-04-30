const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: VAR_2,
          });
        }
        var VAR_3 = 0;
        for (VAR_4 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_5 = VAR_1[VAR_2];
          VAR_3 = VAR_3 + VAR_5.KEY_1 + VAR_5.KEY_2;
        }
    }
};