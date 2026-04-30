const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: true,
          KEY_2: true,
          KEY_3: true,
        };
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 999999; VAR_3++) {
          if (VAR_1.KEY_1 && VAR_1.KEY_2 && VAR_1.KEY_3) ++VAR_2;
        }
        console.log(VAR_2);
    }
};