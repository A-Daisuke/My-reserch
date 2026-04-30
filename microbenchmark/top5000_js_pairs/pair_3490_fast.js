const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        for (var VAR_4 in VAR_1) {
          VAR_1[VAR_4];
        }
    }
};