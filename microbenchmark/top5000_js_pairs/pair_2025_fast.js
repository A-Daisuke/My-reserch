const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = {
          KEY_1: "cat",
          KEY_2: {
            KEY_3: [1, 2, 3],
          },
          KEY_4: { KEY_5: { KEY_6: { KEY_7: -1 } } },
          KEY_8: [0, "a", 77777, 999999, -9],
          KEY_9: 88888888888888900,
          KEY_10: VAR_1,
        };
        VAR_4 = JSON.stringify(VAR_3);
        Function("return " + VAR_4)();
    }
};