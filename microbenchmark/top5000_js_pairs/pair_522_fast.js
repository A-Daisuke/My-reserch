const Benchmark = {
    run: function() {
        let VAR_1 = [];
        let VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++, VAR_1.push(VAR_3));
        VAR_1.forEach((VAR_4) => {
          VAR_2.push(VAR_4 * 2);
        });
    }
};