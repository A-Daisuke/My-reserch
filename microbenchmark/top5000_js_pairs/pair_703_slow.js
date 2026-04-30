const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          const VAR_3 = {};
          VAR_3[`var${VAR_2}`] = VAR_2;
          VAR_1.push(VAR_3);
        }
        var VAR_4 = JSON.parse(JSON.stringify(VAR_1));
    }
};