const Benchmark = {
    run: function() {
        VAR_1 = {
          KEY_1: {
            KEY_2: function () {
              return 2 + 2;
            },
            KEY_3: "string",
          },
        };
        try {
          VAR_1.KEY_1.KEY_2();
        } catch (VAR_2) {}
    }
};