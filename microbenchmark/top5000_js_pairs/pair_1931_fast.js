const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_4,
          VAR_2 = new Array(100000);
        for (VAR_1 in VAR_2) {
          VAR_4 = VAR_2[VAR_1];
        }
    }
};