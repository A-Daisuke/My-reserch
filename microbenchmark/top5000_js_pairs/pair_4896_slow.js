const Benchmark = {
    run: function() {
        var VAR_1 = "42.5",
          VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 100; ++VAR_3) VAR_2 += parseFloat(VAR_1);
    }
};