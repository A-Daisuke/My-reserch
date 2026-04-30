const Benchmark = {
    run: function() {
        var VAR_5 = {
          KEY_1: 1,
          KEY_2: "test",
          KEY_3: false,
        };
        var VAR_4 = 100;
        while (VAR_4--) Object.create(VAR_5);
    }
};