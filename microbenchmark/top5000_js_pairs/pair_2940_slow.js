const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: false,
          });
        }
        VAR_1.map((VAR_3) => {
          const VAR_4 = VAR_3;
          VAR_4.KEY_2 = false;
          return VAR_4;
        });
    }
};