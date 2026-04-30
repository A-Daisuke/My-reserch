const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.random());
        var VAR_3 = 0;
        for (var VAR_4 = 0; VAR_2 < 10000; VAR_2++) {
          if (VAR_1[VAR_2] > 0.5) {
            VAR_3++;
          } else {
            VAR_3--;
          }
        }
    }
};