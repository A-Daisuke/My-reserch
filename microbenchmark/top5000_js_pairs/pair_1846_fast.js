const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.random() * 1000);
        }
        VAR_1.forEach(function (VAR_4) {
          Math.random() * VAR_4;
        });
    }
};