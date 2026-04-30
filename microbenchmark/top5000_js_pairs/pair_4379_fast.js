const Benchmark = {
    run: function() {
        var VAR_8;
        var VAR_9 = [10, 20, 30, 40, 50];
        var VAR_1 = {
          KEY_1: 10,
          KEY_2: 20,
          KEY_3: 30,
          KEY_4: 40,
          KEY_5: 50,
        };
        VAR_8 = VAR_9[0] + VAR_9[4];
        VAR_8 = VAR_9[1] + VAR_9[3];
        VAR_8 = VAR_9[2] + VAR_9[2];
        VAR_8 = VAR_9[3] + VAR_9[1];
        VAR_8 = VAR_9[4] + VAR_9[0];
    }
};