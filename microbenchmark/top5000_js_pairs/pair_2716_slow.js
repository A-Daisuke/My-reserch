const Benchmark = {
    run: function() {
        var VAR_1 =
          "var z = 0;" +
          "  for (var i = 0; i < 10; i++) {" +
          "    for (var j = 0; j < 10; j++) {" +
          "      z += Math.random();" +
          "    }" +
          "  }";
        var VAR_2 = new Function(VAR_1);
        eval(VAR_1);
    }
};