const Benchmark = {
    run: function() {
        var VAR_1 = 8;
        var VAR_2 = 1230132.1230123;
        var VAR_3 = -1230132.1230123;
        for (var VAR_4 = 0; VAR_4 < 100; VAR_4++) {
          String(Math.abs(VAR_3)).split(".")[0].length;
        }
    }
};