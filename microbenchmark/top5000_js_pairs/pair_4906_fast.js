const Benchmark = {
    run: function() {
        var VAR_1;
        VAR_1 = {
          KEY_1: 0,
          KEY_2: 0,
          KEY_3: function KEY_3(VAR_4) {
            VAR_1.KEY_1 = VAR_4;
          },
          KEY_4: function KEY_4(VAR_5) {
            return VAR_1.KEY_1;
          },
        };
    }
};