const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = 52635;
        VAR_3 = Array.apply(null, Array(VAR_1)).map(Number.prototype.valueOf, VAR_2);
    }
};