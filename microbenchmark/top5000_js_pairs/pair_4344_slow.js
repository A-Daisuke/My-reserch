const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push(new Array(100));
        }
        var VAR_3 = [],
          VAR_4 = VAR_1.length;
        while (VAR_2--) for (VAR_5 = VAR_1[VAR_2].length; VAR_5--; ) VAR_3.push(VAR_1[VAR_2][VAR_5]);
    }
};