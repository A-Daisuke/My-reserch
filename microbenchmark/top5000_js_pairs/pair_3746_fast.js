const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_3 = global.winHeight;
        var VAR_4 = global.winWidth;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(VAR_3 * VAR_4);
        }
        VAR_1 = [];
    }
};