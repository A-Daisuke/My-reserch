const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        Array.apply(0, Array(VAR_1)).map(function (VAR_2, VAR_3) {
          return Number(VAR_3);
        });
    }
};