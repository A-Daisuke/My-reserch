const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 12500; VAR_2++) {
          VAR_1.push(true, false, true, false, 1, 2, 3, 4);
        }
        for (var VAR_3 = 0, VAR_4 = 1000; VAR_2 < VAR_4; VAR_2++) {
          VAR_1.unshift(VAR_2);
          VAR_1.pop();
        }
    }
};