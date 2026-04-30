const Benchmark = {
    run: function() {
        var VAR_1 = Array(10000);
        var VAR_2 = [];
        for (let VAR_3 of VAR_1.keys()) {
          VAR_2.push(VAR_3);
        }
    }
};