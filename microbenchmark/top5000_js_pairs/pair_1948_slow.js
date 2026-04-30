const Benchmark = {
    run: function() {
        var VAR_1 = "laksjfhuhksdfh.dsfkh-sdf!sdf",
          VAR_2,
          VAR_3 = /^[\w._-]+$/;
        for (var VAR_4 = 0; VAR_4 < 5000; VAR_4++) {
          VAR_2 = VAR_3.test(VAR_1);
        }
    }
};