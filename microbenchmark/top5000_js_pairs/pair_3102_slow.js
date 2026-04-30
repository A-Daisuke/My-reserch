const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0,
          VAR_3 = 1000;
        for (VAR_2; VAR_2 < VAR_3; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        for (VAR_2 = VAR_3; VAR_2--; ) {
          VAR_1.splice(VAR_2, 1);
        }
    }
};