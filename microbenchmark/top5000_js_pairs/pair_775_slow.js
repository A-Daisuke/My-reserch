const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000).fill(1);
        for (var VAR_2 of VAR_1) {
          VAR_2 += 1;
        }
    }
};