const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function (VAR_2) {
            VAR_2++;
          },
        };
        var VAR_3 = Object.create(VAR_1);
        var VAR_4 = Object.create(VAR_3);
        var VAR_5 = Object.create(VAR_4);
        var VAR_6 = Object.create(VAR_5);
        var VAR_7 = Object.create(VAR_6);
        var VAR_8 = Object.create(VAR_7);
        var VAR_9 = Object.create(VAR_8);
        var VAR_10 = Object.create(VAR_9);
        var VAR_11 = Object.create(VAR_10);
        var VAR_12 = Object.create(VAR_11);
        VAR_12.KEY_1(10);
    }
};