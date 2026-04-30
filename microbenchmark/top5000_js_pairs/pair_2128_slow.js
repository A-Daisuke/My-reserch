const Benchmark = {
    run: function() {
        var VAR_1 = Array(10000 + 1)
          .join(0)
          .split("");
        var VAR_2 = VAR_1.map(function (VAR_3) {
          return VAR_3++;
        });
        var VAR_4 = VAR_2.slice(0);
        var VAR_5 = VAR_2.slice(0);
    }
};