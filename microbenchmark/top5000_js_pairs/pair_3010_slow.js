const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0;
        var VAR_3 = 0;
        for (VAR_3 = 0; VAR_3 < 10000; ++VAR_3) VAR_1.push(VAR_3 + "");
        for (VAR_3 = 0; VAR_3 < 10000; ++VAR_3) VAR_2 = VAR_1[VAR_3] >> 0;
    }
};