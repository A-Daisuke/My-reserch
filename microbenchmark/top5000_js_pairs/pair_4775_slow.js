const Benchmark = {
    run: function() {
        var VAR_1 = parseInt(85789037428);
        VAR_1 = VAR_1.toString(2);
        VAR_1.split("").reduce(function (VAR_2, VAR_3) {
          return parseInt(VAR_1) + parseInt(VAR_3);
        });
    }
};