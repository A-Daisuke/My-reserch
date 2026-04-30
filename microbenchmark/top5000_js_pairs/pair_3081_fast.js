const Benchmark = {
    run: function() {
        var VAR_1 = new Array();
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 % 2 == 0 ? true : false });
        }
        var VAR_3 = VAR_1.filter(function (VAR_5) {
          return !VAR_5.KEY_1;
        });
    }
};