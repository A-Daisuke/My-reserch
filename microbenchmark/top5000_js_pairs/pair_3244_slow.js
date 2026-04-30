const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = [];
        while (VAR_1--) {
          VAR_2.push("element " + VAR_1);
        }
        for (var VAR_3 in VAR_2) {
          VAR_2[VAR_3];
        }
    }
};