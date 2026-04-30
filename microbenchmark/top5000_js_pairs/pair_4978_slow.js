const Benchmark = {
    run: function() {
        var VAR_1 = [
          "2015-02-09T17:37:49.247",
          "2015-02-09T17:37:49.247",
          "2015-02-09T17:37:49.247",
          "2015-02-09T17:37:49.247",
          "2015-02-09T17:37:49.247",
          "2015-02-09T17:37:49.247",
        ];
        VAR_1.forEach(function (VAR_2) {
          var VAR_3 = VAR_2.split("T", 2);
          VAR_3[0] = VAR_3[0].split("-").reverse().join(".");
        });
    }
};