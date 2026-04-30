const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          var VAR_1 = 0;
          for (var VAR_2 = 0; VAR_2 < 10; VAR_2++) {
            for (var VAR_3 = 0; VAR_3 < 10; VAR_3++) {
              VAR_1 += Math.random();
            }
          }
        };
        var VAR_4 =
          "var z = 0;" +
          "  for (var i = 0; i < 10; i++) {" +
          "    for (var j = 0; j < 10; j++) {" +
          "      z += Math.random();" +
          "    }" +
          "  }";
        var VAR_5 = new Function(VAR_4);
        VAR_5();
    }
};