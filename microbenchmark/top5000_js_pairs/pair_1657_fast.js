const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0,
          VAR_3 = 0;
        while (VAR_2++ < 10000) {
          VAR_1.push(VAR_2);
        }
        for (var VAR_5 = 0, VAR_6 = VAR_1.length; VAR_5 < VAR_6; VAR_5++) {
          VAR_3 += VAR_1[VAR_5];
        }
    }
};