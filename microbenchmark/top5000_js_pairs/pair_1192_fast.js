const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_3 = { KEY_1: VAR_2 };
          VAR_1 += VAR_3.VAR_2;
        }
        console.log(VAR_1);
    }
};