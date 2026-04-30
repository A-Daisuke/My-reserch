const Benchmark = {
    run: function() {
        var VAR_1 = 2.78;
        var VAR_2 = 3.65;
        var VAR_3 = Math.PI;
        for (var VAR_4 = 0; VAR_4 < 5000; VAR_4++)
          var VAR_5 = Math.sqrt(Math.pow(VAR_1, 2) + Math.pow(VAR_2, 2) + Math.pow(VAR_3, 2));
    }
};