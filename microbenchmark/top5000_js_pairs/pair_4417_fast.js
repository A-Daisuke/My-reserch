const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2;
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2 += 1) {
          VAR_1.push(Math.random);
        }
        VAR_1.filter(function (VAR_3) {
          return VAR_3 === 0.5;
        });
    }
};