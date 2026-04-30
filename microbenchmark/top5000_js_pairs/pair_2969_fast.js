const Benchmark = {
    run: function() {
        var VAR_1 = [
          100,
          1000,
          1000000,
          1000000.33,
          "1000000.330",
          0.0001,
          "0.0001",
          0.00001,
          "0.00001",
          1000000.00001,
        ];
        VAR_1.forEach(function (VAR_3) {
          Number(VAR_3).toLocaleString("en-EN");
        });
    }
};