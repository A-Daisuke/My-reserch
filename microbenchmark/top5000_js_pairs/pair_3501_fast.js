const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 0,
          VAR_3 = 1000;
        while (VAR_2 < VAR_3) {
          VAR_1.push(VAR_2++);
        }
        var VAR_4 = null;
        for (VAR_4 = VAR_1.length; VAR_4--; ) {}
    }
};