const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; ++VAR_2) {
          VAR_1.push(0);
        }
        let VAR_4 = VAR_1.length;
        const VAR_5 = [];
        while (VAR_4--) {
          VAR_5.push(VAR_1[VAR_4]);
        }
    }
};