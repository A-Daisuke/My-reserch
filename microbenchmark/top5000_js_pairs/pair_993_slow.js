const Benchmark = {
    run: function() {
        var VAR_1 = "a".repeat(100000).split("");
        VAR_1.forEach(function (VAR_2) {
          var VAR_3 = VAR_2;
        });
    }
};