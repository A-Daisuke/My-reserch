const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 50000; VAR_2++) {
          VAR_1.push("value " + VAR_2);
        }
        var VAR_4 = VAR_1.length;
        for (VAR_2 = VAR_4; VAR_2 == 0; VAR_2--) {}
    }
};