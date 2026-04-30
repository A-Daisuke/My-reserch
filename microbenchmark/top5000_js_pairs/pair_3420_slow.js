const Benchmark = {
    run: function() {
        var VAR_1 =
          "However,\n" +
          "not everything that can be counted\n" +
          "counts,\n" +
          "and not everything that counts\n" +
          "can be counted.\n";
        for (var VAR_2 = 0; VAR_2 < 8; VAR_2++) {
          VAR_1 = VAR_1 + VAR_1;
        }
        VAR_1.split("\n").length;
    }
};