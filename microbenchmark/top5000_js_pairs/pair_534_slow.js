const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        VAR_1.reverse();
        var VAR_3 = VAR_1.pop();
        VAR_1.reverse();
    }
};