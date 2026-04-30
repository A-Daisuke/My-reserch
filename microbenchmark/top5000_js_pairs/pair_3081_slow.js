const Benchmark = {
    run: function() {
        var VAR_1 = new Array();
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 % 2 == 0 ? true : false });
        }
        var VAR_3 = VAR_1.slice(0);
        for (var VAR_4 = VAR_3.length - 1; VAR_4 >= 0; VAR_4--) {
          if (VAR_3[VAR_4].KEY_1) VAR_3.splice(VAR_4, 1);
        }
    }
};