const Benchmark = {
    run: function() {
        var VAR_1 = 1234567;
        const VAR_2 = new Intl.NumberFormat("de-DE");
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_2.format(VAR_1);
        }
    }
};