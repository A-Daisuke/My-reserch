const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1; VAR_2 <= 1000; VAR_2++) VAR_1.push(VAR_2);
        var VAR_5 = 0;
        while (VAR_2 < VAR_1.length) {
          VAR_2++;
        }
    }
};