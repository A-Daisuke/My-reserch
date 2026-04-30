const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3;
        for (VAR_1 = 0, VAR_2 = 0; VAR_1 < 100000; VAR_1++) {
          VAR_2 += Math.sqrt(VAR_1);
        }
        VAR_3 = VAR_2;
        setTimeout(function () {
          VAR_1 = VAR_2;
        }, 0);
    }
};