const Benchmark = {
    run: function() {
        var VAR_1 = 1024;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push({
            KEY_1: 1,
            KEY_2: 2,
            KEY_3: 3,
          });
        }
        var VAR_4 = [];
        VAR_2.forEach(function (VAR_5) {
          VAR_4.push({
            KEY_4: VAR_2.KEY_1,
            KEY_5: VAR_2.KEY_2,
            KEY_6: VAR_2.KEY_3,
          });
        });
    }
};