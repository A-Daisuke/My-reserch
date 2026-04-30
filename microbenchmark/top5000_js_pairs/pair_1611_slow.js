const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: 45,
          KEY_2: 1,
          KEY_3: function () {
            for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) this.KEY_2 += this.KEY_1;
          },
        };
        var VAR_3 = VAR_1.KEY_3;
        VAR_3();
    }
};