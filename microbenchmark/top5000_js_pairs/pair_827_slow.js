const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        Array.apply(null, Array(VAR_1)).map(function () {
          return null;
        });
    }
};