const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = new Array(VAR_1);
        VAR_2.forEach((VAR_5, VAR_6, VAR_7) => {
          VAR_7[VAR_8] = VAR_6;
        });
    }
};