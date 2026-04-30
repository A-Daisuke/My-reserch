const Benchmark = {
    run: function() {
        var VAR_1 = 8192,
          VAR_2 = 4096;
        var VAR_6;
        var VAR_3 = undefined;
        VAR_3 = [];
        for (VAR_6 = 0; VAR_6 < VAR_2; VAR_6++) VAR_3.push(VAR_1 + VAR_6);
    }
};