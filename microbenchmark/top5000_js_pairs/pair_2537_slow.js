const Benchmark = {
    run: function() {
        var VAR_1 = Array(10000 + 1)
          .join(0)
          .split("");
        var VAR_2 = [],
          VAR_3 = [],
          VAR_4 = [];
        for (VAR_5 = 0, VAR_6 = 10000; VAR_5 < VAR_6; VAR_5++) {
          VAR_2.push(0);
          VAR_3.push(0);
          VAR_4.push(0);
        }
    }
};