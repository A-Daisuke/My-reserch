const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_3 = Math.round(Math.random() * 100000);
        var VAR_4 = VAR_1[VAR_3];
        var VAR_6 = VAR_1.indexOf(VAR_4);
        VAR_1.splice(VAR_6, 1);
    }
};