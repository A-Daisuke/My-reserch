const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        VAR_2.VAR_4 = 0;
        VAR_1.forEach((VAR_5) => {
          VAR_2.push(VAR_5);
        });
    }
};