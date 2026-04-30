const Benchmark = {
    run: function() {
        var VAR_13;
        var VAR_1 = [10, 20, 30, 40, 50];
        var VAR_14 = {
          KEY_1: 10,
          KEY_2: 20,
          KEY_3: 30,
          KEY_4: 40,
          KEY_5: 50,
        };
        VAR_13 = VAR_14.KEY_1 + VAR_14.KEY_5;
        VAR_13 = VAR_14.KEY_2 + VAR_14.KEY_4;
        VAR_13 = VAR_14.KEY_3 + VAR_14.KEY_3;
        VAR_13 = VAR_14.KEY_4 + VAR_14.KEY_2;
        VAR_13 = VAR_14.KEY_5 + VAR_14.KEY_1;
    }
};