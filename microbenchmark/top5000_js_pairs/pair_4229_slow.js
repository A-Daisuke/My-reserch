const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 5000; VAR_2++) {
          VAR_1.push(VAR_2 + 1);
        }
        let VAR_3 = VAR_1.map((VAR_4) => VAR_4);
    }
};