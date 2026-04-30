const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        while (VAR_1.length > 0) VAR_1.splice(VAR_1.length - 1, 1);
    }
};