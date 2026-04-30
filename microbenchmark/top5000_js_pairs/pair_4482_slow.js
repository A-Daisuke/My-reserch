const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; ++VAR_2) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_3, VAR_4, VAR_5, VAR_6;
        VAR_6 = [];
        for (VAR_2 = 0, VAR_4 = VAR_1.length; VAR_2 < VAR_4; VAR_2++) {
          VAR_5 = VAR_1[VAR_2];
          VAR_6.push(VAR_5.KEY_1);
        }
    }
};