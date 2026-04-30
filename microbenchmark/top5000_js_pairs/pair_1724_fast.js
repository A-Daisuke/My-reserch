const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 100000;
        while (VAR_2--) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = 0;
        var VAR_4 = VAR_1.slice();
        for (var VAR_6 = 0; VAR_6 < VAR_4.length; VAR_6++) {
          VAR_3 = VAR_4[VAR_6] * VAR_4[VAR_6];
        }
    }
};