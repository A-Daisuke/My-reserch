const Benchmark = {
    run: function() {
        var VAR_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.forEach((VAR_5) => {
            VAR_6 = VAR_5;
          });
        }
    }
};