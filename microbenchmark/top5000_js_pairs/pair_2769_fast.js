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
        var VAR_3 = 0;
        var VAR_4 = -1;
        while ((VAR_4 = VAR_1.indexOf("\n", VAR_4 + 1)) !== -1) VAR_3++;
    }
};