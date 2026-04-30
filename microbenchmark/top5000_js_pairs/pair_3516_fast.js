const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: "string",
          KEY_2: [1, 2, 3],
          KEY_3: 42 + 7,
          KEY_4: "world",
          "oh look": "a string again",
        };
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          Object.keys(VAR_1);
        }
    }
};