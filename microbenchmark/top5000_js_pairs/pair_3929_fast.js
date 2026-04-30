const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = 52635;
        new Array(VAR_1).fill(VAR_2);
    }
};