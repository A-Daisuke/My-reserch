const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.random() * VAR_2);
        }
        let VAR_3 = [];
        for (let VAR_4 of VAR_1) {
          VAR_3.push(VAR_4 * 2);
        }
    }
};