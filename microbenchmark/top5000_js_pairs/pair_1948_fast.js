const Benchmark = {
    run: function() {
        var VAR_1 = "laksjfhuhksdfh.dsfkh-sdf!sdf",
          VAR_2;
        for (var VAR_4 = 0; VAR_4 < 5000; VAR_4++) {
          VAR_2 = !/[^\w._-]/.test(VAR_1);
        }
    }
};