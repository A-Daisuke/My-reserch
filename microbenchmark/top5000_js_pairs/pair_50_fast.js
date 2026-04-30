const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 20000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = VAR_1.length;
        var VAR_5 = VAR_1.length;
        for (var VAR_4 = VAR_3 - 1; VAR_2 >= 0; VAR_2--) {
          VAR_1.pop();
        }
    }
};