const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 100000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.push(Math.PI * VAR_3);
        }
        for (var VAR_4 = 0; VAR_3 < VAR_2; VAR_3++) {
          var VAR_5 = Math.round(VAR_1[VAR_3] * 100) / 100;
        }
    }
};