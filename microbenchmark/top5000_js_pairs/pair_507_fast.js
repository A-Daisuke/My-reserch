const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = [];
        VAR_1.forEach((VAR_4) => {
          if (VAR_4 % 2 === 0) return;
          VAR_3.push(VAR_4 * 10);
        });
    }
};