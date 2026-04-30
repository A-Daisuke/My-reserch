const Benchmark = {
    run: function() {
        var VAR_1 = 8192,
          VAR_2 = 4096;
        var VAR_3 = undefined;
        VAR_3 = Array.apply(0, Array(VAR_2)).map(function (VAR_4, VAR_5) {
          return VAR_5 + VAR_1;
        });
    }
};