const Benchmark = {
    run: function() {
        var VAR_1 = new Array(2048);
        var VAR_2 = [];
        var VAR_3 = 64;
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          var VAR_5 = 300;
          VAR_2 = VAR_2.concat(VAR_1.slice(0, VAR_5));
        }
    }
};