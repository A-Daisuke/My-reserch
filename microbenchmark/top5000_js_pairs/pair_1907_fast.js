const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 9999; VAR_2++) {
          VAR_1.push(Math.random());
        }
        var VAR_3;
        var VAR_5 = VAR_1.length;
        while (VAR_5--) {
          VAR_3 = VAR_1[VAR_2];
        }
    }
};