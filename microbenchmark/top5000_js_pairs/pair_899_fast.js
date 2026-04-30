const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2,
          VAR_4 = new Array(100000);
        for (VAR_1 in VAR_4) {
          VAR_2 = VAR_4[VAR_1];
        }
    }
};