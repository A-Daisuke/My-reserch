const Benchmark = {
    run: function() {
        var VAR_1 = "laksjfhuhksdfh.dsfkh-sdf!sdf",
          VAR_2,
          VAR_4 = /[^\w._-]/;
        for (var VAR_3 = 0; VAR_3 < 5000; VAR_3++) {
          VAR_2 = !VAR_4.test(VAR_1);
        }
    }
};