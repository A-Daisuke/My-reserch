const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(1000 * Math.random());
        }
        var VAR_3 = VAR_1[0];
        for (var VAR_4 = 1; VAR_2 < VAR_1.length; VAR_2++) {
          if (VAR_1[VAR_2] > VAR_3) {
            VAR_3 = VAR_1[VAR_2];
          }
        }
    }
};