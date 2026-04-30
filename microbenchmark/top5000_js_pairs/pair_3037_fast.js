const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_6 = 0;
        for (var VAR_7 = 0, VAR_8 = VAR_1; VAR_7 < VAR_8.length; VAR_7++) {
          var VAR_9 = VAR_8[VAR_7];
          VAR_6 += VAR_9.KEY_1;
        }
    }
};