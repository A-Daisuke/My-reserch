const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0,
          VAR_3 = 0;
        while (VAR_2++ < 10000) {
          VAR_1.push(VAR_2);
        }
        for (var VAR_4 in VAR_1) {
          VAR_3 += VAR_1[VAR_4];
        }
    }
};