const Benchmark = {
    run: function() {
        var VAR_5 = Math.floor(Math.random() * 101);
        var VAR_1 = {};
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 <= 100; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        VAR_2.some((VAR_6) => VAR_6 === VAR_5);
    }
};