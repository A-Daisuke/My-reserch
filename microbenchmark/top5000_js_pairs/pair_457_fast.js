const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_4 = [],
          VAR_5;
        for (var VAR_6 = 0, VAR_7 = VAR_1.length; VAR_2 < VAR_7; VAR_2++) {
          VAR_5 = VAR_1[VAR_2];
          VAR_4.push(VAR_5 * VAR_5);
        }
    }
};