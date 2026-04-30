const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_3 = Math.floor(Math.random() * 100);
        var VAR_4 = VAR_1
          .map(function (VAR_5) {
            return VAR_5.KEY_1;
          })
          .indexOf(VAR_3);
        var VAR_6 = VAR_1[VAR_4];
    }
};