const Benchmark = {
    run: function() {
        var VAR_1 = /\b(\d)\b/g;
        for (var VAR_2 = 0; VAR_2 < 20; VAR_2++) {
          var VAR_3 = (VAR_2 + "").replace(VAR_1, "0$1");
        }
    }
};