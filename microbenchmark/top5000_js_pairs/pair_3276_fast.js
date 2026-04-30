const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_3 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_3.push(VAR_2);
        }
        VAR_1.splice.apply(VAR_1, [0, 0].concat(VAR_3));
        VAR_1.length;
    }
};