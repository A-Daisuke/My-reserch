const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var VAR_3 = 0; VAR_3 < 1000; ++VAR_3) {
          for (var VAR_4 = 0; VAR_4 < VAR_2.length; ++VAR_4) {
            VAR_1.push(VAR_2[VAR_4]);
          }
        }
    }
};