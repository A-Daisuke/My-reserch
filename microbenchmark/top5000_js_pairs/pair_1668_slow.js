const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = {};
        VAR_1[9999] = true;
        VAR_2[9999] = true;
        var VAR_3 = VAR_1.length;
        VAR_1.forEach(function (VAR_4, VAR_5) {
          VAR_4;
        });
    }
};