const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 300; ++VAR_2) {
          VAR_1.push(Math.random() * VAR_2);
        }
        VAR_1;
    }
};