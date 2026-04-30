const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: "string",
          KEY_2: [1, 2, 3],
          KEY_3: 42 + 7,
          KEY_4: "world",
          "oh look": "a string again",
        };
        var VAR_2;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 = [];
          for (var VAR_4 in VAR_1) {
            if (VAR_1.hasOwnProperty(VAR_4)) {
              VAR_2.push(VAR_4);
            }
          }
        }
    }
};