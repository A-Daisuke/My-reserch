const Benchmark = {
    run: function() {
        var VAR_1 = [];
        while (VAR_1.length < 500000) {
          VAR_1.push(VAR_1.length);
        }
        for (var VAR_2 in VAR_1) {
          var VAR_3 = VAR_1[VAR_2];
        }
    }
};