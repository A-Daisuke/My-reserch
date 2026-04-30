const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          var VAR_3 = 0;
          for (var VAR_4 = 0; VAR_4 < 10; VAR_4++) {
            for (var VAR_5 = 0; VAR_5 < 10; VAR_5++) {
              VAR_3 += Math.random();
            }
          }
        };
        var VAR_1 =
          "var z = 0;" +
          "  for (var i = 0; i < 10; i++) {" +
          "    for (var j = 0; j < 10; j++) {" +
          "      z += Math.random();" +
          "    }" +
          "  }";
        var VAR_2 = new Function(VAR_1);
        FUNCTION_1();
    }
};