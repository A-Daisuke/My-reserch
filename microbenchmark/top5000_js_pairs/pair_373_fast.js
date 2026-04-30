const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        for (var VAR_2 = [], VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        VAR_2.reverse();
    }
};