const Benchmark = {
    run: function() {
        var VAR_10 = {
          KEY_3: {
            KEY_4: 0,
            KEY_5: 0,
          },
        };
        var VAR_6 = {
          KEY_2: [0, 0],
        };
        var VAR_7 = 0,
          VAR_8 = 0,
          VAR_9 = 1;
        VAR_10.KEY_3.KEY_4 = Math.random();
        VAR_7 = VAR_10.KEY_3.KEY_4;
        VAR_10.KEY_3.KEY_5 = Math.random();
        VAR_7 = VAR_10.KEY_3.KEY_5;
    }
};