const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3,
          VAR_4;
        for (VAR_3 = 0; VAR_3 < 100000; VAR_3++) VAR_1.push(VAR_3.toString(16));
        VAR_4 = "";
        VAR_1.forEach(function (VAR_5) {
          VAR_4 += VAR_5;
        });
        VAR_2.push(VAR_4);
        VAR_4 = undefined;
    }
};