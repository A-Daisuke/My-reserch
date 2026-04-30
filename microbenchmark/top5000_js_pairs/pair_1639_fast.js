const Benchmark = {
    run: function() {
        var VAR_1 = [0, 0, 0, 0, 0];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_3 = [];
          for (var VAR_4 = 1; VAR_4 < 5; VAR_4++) {
            VAR_3.push(VAR_1[VAR_4]);
          }
          VAR_3.push(1);
          VAR_1 = VAR_3;
        }
    }
};