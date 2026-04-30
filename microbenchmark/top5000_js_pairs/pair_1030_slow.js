const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (VAR_2 = 0, VAR_3 = 20000; VAR_2 < VAR_3; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        for (var VAR_2 in VAR_1) {
        }
    }
};