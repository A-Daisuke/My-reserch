const Benchmark = {
    run: function() {
        var VAR_1 = 2000,
          VAR_2 = [];
        while (VAR_1--) VAR_2.push(Math.floor(Math.random() * 10) + 1);
        for (var VAR_4 = 0; VAR_4 < VAR_1; ++VAR_4) VAR_2[VAR_4];
    }
};