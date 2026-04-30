const Benchmark = {
    run: function() {
        var VAR_1 = new Map();
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.set(VAR_2, VAR_2.toString());
        }
        for (let VAR_3 of VAR_1.keys()) {
          let VAR_4 = VAR_1[VAR_3];
        }
    }
};