const Benchmark = {
    run: function() {
        VAR_1 = {
          KEY_1: Math.random().toString(),
          KEY_2: Math.random().toString(),
          KEY_3: Math.random().toString(),
        };
        VAR_2 = Math.random().toString();
        for (VAR_4 in VAR_1) VAR_1[VAR_4] = VAR_2;
    }
};