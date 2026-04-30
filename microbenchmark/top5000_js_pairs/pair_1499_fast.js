const Benchmark = {
    run: function() {
        var VAR_1 = 3;
        var VAR_2 = Array.apply(null, new Array(1000)).map(function (VAR_3, VAR_4) {
          return VAR_4 + 1;
        });
        var VAR_5 = Math.pow.bind(Math, VAR_1);
        VAR_2.forEach(VAR_5);
    }
};