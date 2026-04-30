const Benchmark = {
    run: function() {
        var VAR_1 = [];
        while (VAR_1.length < 500000) {
          VAR_1.push(VAR_1.length);
        }
        VAR_1.some(function (VAR_2) {
          var VAR_3 = VAR_2;
        });
    }
};