const Benchmark = {
    run: function() {
        var VAR_1 = new Date();
        var VAR_2 = new Date(),
          VAR_3 = new Date();
        var VAR_4 = VAR_1.toDateString();
        VAR_3.setHours(0, 0, 0, 0);
        VAR_2.setHours(24, 0, 0, 0);
        var VAR_5 = [];
        var VAR_6;
        for (var VAR_7 = 0; VAR_7 < 1000; VAR_7++) {
          VAR_6 = new Date();
          VAR_6.setDate(Math.random() * 500 - 250);
          VAR_5.push(VAR_6);
        }
        var VAR_8;
        for (var VAR_9 = 0; VAR_7 < 1000; VAR_7++) VAR_8 = VAR_5[VAR_7].toDateString() === VAR_4;
    }
};