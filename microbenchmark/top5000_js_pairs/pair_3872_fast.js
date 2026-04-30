const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [6, 16];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          var VAR_4 = VAR_2[VAR_3 % 2];
          VAR_1.push(VAR_4 < 10 ? "0" + VAR_4 : VAR_4);
        }
    }
};