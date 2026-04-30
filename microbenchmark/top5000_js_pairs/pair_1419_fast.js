const Benchmark = {
    run: function() {
        var VAR_1 = Object.create(null);
        for (var VAR_2 = 0; VAR_2 < 9999; VAR_2++) {
          var VAR_3 = null;
          VAR_3 = VAR_3 && VAR_1[VAR_2];
        }
    }
};