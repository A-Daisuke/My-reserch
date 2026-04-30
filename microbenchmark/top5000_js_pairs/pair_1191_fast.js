const Benchmark = {
    run: function() {
        var VAR_2,
          VAR_1,
          VAR_3 = new Array(100000);
        for (VAR_2 in VAR_3) {
          VAR_1 = VAR_3[VAR_2];
        }
    }
};