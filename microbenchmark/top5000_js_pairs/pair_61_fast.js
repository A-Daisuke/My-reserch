const Benchmark = {
    run: function() {
        for (VAR_1 = 0; VAR_1 < 1000000; VAR_1++) {
          VAR_3 = {
            KEY_1: 1,
            KEY_2: "string",
          };
          VAR_3.KEY_1 += 1;
          VAR_3.KEY_2 += "foobar";
        }
    }
};