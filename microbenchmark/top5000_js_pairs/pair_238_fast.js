const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3;
        for (VAR_3 = 0; VAR_3 < 500000; VAR_3++) {
          VAR_2.push(Math.floor(Math.random() * 898 + 100));
        }
        VAR_1 = VAR_1.concat(VAR_2);
    }
};