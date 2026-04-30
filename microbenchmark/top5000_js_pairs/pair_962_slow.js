const Benchmark = {
    run: function() {
        var VAR_1 = Object.create(null);
        var VAR_2 = Object.create(null);
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1["key_" + VAR_3] = VAR_3;
          VAR_2["key_" + VAR_3] = new RegExp("key_" + VAR_3);
        }
        for (var VAR_4 in VAR_1) {
          var VAR_5 = VAR_2[VAR_4].test("343434fddfds");
        }
    }
};