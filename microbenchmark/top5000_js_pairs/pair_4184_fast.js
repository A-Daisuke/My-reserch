const Benchmark = {
    run: function() {
        var VAR_1 = new Array(500).map(function (VAR_2) {
          return Math.random() * 256;
        });
        var VAR_3 = new Array(500).map(function (VAR_4) {
          return Math.random() * 256;
        });
        VAR_1 = VAR_1.concat(VAR_3);
    }
};