const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        VAR_1 = VAR_1.reverse();
    }
};