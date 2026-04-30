const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = 52635;
        VAR_3 = new Array(VAR_1 + 1).join(VAR_2).split("").map(Number);
    }
};