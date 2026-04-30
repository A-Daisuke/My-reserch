const Benchmark = {
    run: function() {
        VAR_1 = {
          KEY_1: Math.random().toString(),
          KEY_2: Math.random().toString(),
          KEY_3: Math.random().toString(),
        };
        VAR_2 = Math.random().toString();
        VAR_3 = JSON.parse(JSON.stringify(VAR_1).replace(/[\d.]+/g, VAR_2));
    }
};