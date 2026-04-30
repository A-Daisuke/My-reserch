const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000).map(Math.random);
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          var VAR_4 = VAR_1[VAR_3];
          VAR_2 += VAR_4;
        }
    }
};