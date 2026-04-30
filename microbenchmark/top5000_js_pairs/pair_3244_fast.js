const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = [];
        while (VAR_1--) {
          VAR_2.push("element " + VAR_1);
        }
        for (var VAR_4 = 0, VAR_5 = VAR_2.length; VAR_4 < VAR_1; VAR_4++) {
          VAR_2[VAR_4];
        }
    }
};