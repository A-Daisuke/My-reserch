const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_1.push(VAR_3.toString());
        }
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.push(VAR_1[Math.floor(Math.random() * 100)]);
        }
        VAR_2.filter((VAR_4, VAR_5) => VAR_2.indexOf(VAR_4) === VAR_3);
    }
};