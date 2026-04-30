const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 <= 1000; VAR_2++) {
          VAR_1.push(1);
        }
        while (VAR_1.length - 1) {
          VAR_1.shift();
        }
    }
};