const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000);
        var VAR_2 = [];
        VAR_1.forEach(function (VAR_3) {
          VAR_2.push(VAR_3);
        });
    }
};