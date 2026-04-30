const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2,
          VAR_3,
          VAR_4;
        for (VAR_2 = 0; VAR_2 < 300; VAR_2++) {
          VAR_4 = [];
          for (VAR_3 = 0; VAR_3 < VAR_2 % 17; VAR_3++) VAR_4.push(VAR_3);
          VAR_1.push(VAR_4);
        }
        var VAR_10 = 0,
          VAR_11 = VAR_1.length,
          VAR_12;
        for (VAR_12 = 0; VAR_12 < VAR_11; VAR_12++) {
          VAR_10 += VAR_1[VAR_12].length;
        }
    }
};