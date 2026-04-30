const Benchmark = {
    run: function() {
        var VAR_1 = Object.create(null);
        var VAR_2 = Object.create(null);
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1["key_" + VAR_3] = VAR_3;
          VAR_2["key_" + VAR_3] = new RegExp("key_" + VAR_3);
        }
        Object.keys(VAR_1).forEach(function (VAR_6) {
          var VAR_7 = VAR_1[VAR_6];
        });
    }
};