const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000 + 1).join("0").split("").map(parseFloat);
        var VAR_2 = VAR_1.reduce(function (VAR_3, VAR_4) {
          return VAR_3 + VAR_4;
        }, 0);
    }
};