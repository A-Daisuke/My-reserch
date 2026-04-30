const Benchmark = {
    run: function() {
        var VAR_1 = new Map();
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.set(VAR_2, VAR_2);
        }
        var VAR_3 = [];
        for (var VAR_4 of VAR_1.values()) {
          VAR_3.push(VAR_4);
        }
    }
};