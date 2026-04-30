const Benchmark = {
    run: function() {
        var VAR_1 = Array(10000 + 1)
          .join(0)
          .split("");
        var VAR_2 = [];
        for (VAR_5 = 0, VAR_6 = 10000; VAR_5 < VAR_6; VAR_5++) {
          VAR_2.push(0);
        }
        var VAR_7 = VAR_2.slice(0);
        var VAR_8 = VAR_2.slice(0);
    }
};