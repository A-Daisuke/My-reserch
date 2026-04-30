const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000).fill(1);
        for (var VAR_3 of VAR_1) {
          VAR_3 += 1;
        }
    }
};