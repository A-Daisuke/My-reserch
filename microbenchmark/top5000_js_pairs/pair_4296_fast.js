const Benchmark = {
    run: function() {
        VAR_1 = {
          KEY_1: Math.random().toString(),
          KEY_2: Math.random().toString(),
          KEY_3: Math.random().toString(),
        };
        VAR_2 = Math.random().toString();
        VAR_1.KEY_1 = VAR_2;
        VAR_1.KEY_2 = VAR_2;
        VAR_1.KEY_3 = VAR_2;
    }
};