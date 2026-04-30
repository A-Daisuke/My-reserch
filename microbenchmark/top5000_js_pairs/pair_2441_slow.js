const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(VAR_2 * VAR_2);
        }
        while (VAR_1.length) {
          VAR_1.splice(0, 1);
        }
    }
};