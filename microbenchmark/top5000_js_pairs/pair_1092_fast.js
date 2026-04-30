const Benchmark = {
    run: function() {
        var VAR_3 = (function (VAR_4) {
          return function (VAR_5) {
            return Math.floor(Math.pow(VAR_4, VAR_5) / Math.sqrt(5) + 0.5);
          };
        })((1 + Math.sqrt(5)) / 2);
        VAR_3(25);
    }
};