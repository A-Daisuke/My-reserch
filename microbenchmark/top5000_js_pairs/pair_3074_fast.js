const Benchmark = {
    run: function() {
        var VAR_6 = [];
        var VAR_7 = [];
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_6.push(VAR_2);
          VAR_7.push(VAR_2);
        }
        var VAR_8 = {
          KEY_3: VAR_6,
          KEY_4: VAR_7,
        };
        var VAR_3 = 0;
        var VAR_9 = VAR_8.KEY_3;
        var VAR_10 = VAR_8.KEY_4;
        for (VAR_4 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_3 = VAR_3 + VAR_6[VAR_2] + VAR_7[VAR_2];
        }
    }
};