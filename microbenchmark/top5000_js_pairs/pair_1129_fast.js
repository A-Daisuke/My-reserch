const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1; VAR_2 <= 1000000; VAR_2++) VAR_1.push(VAR_2);
        var VAR_3 = 0,
          VAR_4;
        do {} while ((VAR_4 = VAR_1[VAR_2++]));
    }
};