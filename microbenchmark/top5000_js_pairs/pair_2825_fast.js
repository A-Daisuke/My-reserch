const Benchmark = {
    run: function() {
        var VAR_1 = new Map();
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.set(VAR_2, VAR_2.toString());
        }
        for (let [VAR_5, VAR_6] of VAR_1) {
        }
    }
};