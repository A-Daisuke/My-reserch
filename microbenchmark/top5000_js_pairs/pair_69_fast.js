const Benchmark = {
    run: function() {
        var VAR_1 = [];
        while (VAR_1.length < 500000) {
          VAR_1.push(VAR_1.length);
        }
        VAR_1.map(function (VAR_4) {
          var VAR_5 = VAR_4;
        });
    }
};