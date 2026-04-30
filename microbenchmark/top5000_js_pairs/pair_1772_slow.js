const Benchmark = {
    run: function() {
        var VAR_1 = "laksjfhuhksdfh.dsfkh-sdf!sdf",
          VAR_2;
        for (var VAR_3 = 0; VAR_3 < 5000; VAR_3++) {
          VAR_2 = /^[\w._-]+$/.test(VAR_1);
        }
    }
};