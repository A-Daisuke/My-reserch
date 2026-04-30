const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 10000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3 += 1) {
          VAR_1.push(Math.random());
        }
        for (VAR_3 = 0; VAR_3 < VAR_2; VAR_3 += 1) {
          var VAR_6 = VAR_1.indexOf(VAR_1[VAR_3]);
        }
    }
};