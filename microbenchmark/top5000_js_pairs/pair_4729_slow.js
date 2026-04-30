const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, Array(1000)).map(String);
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          VAR_2.push(VAR_1[VAR_3]);
        }
    }
};