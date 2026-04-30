const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        for (var VAR_4 = 0; VAR_3 < 10; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        for (var VAR_6, VAR_7 = VAR_1.length; VAR_6 < VAR_7; VAR_6++) {}
    }
};