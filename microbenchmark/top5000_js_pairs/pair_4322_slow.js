const Benchmark = {
    run: function() {
        var VAR_1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var VAR_2 in VAR_1) {
          var VAR_3 = VAR_1[VAR_2];
        }
    }
};