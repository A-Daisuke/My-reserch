const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000)
          .join("0")
          .split("0")
          .map(function (VAR_2, VAR_3) {
            return VAR_3;
          });
        var VAR_4 = 0;
        VAR_1.forEach(function (VAR_5) {
          VAR_4 += VAR_5;
        });
    }
};