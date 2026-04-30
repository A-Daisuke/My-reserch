const Benchmark = {
    run: function() {
        var VAR_1 = ["a", "b", "c", "d", "e"];
        var VAR_4 = "";
        var VAR_5 = Math.random().toString();
        var VAR_6 = Math.random().toString();
        VAR_4 =
          VAR_5 +
          VAR_4 +
          "test" +
          "test" +
          "test" +
          "test" +
          "test" +
          "test" +
          "test" +
          "test" +
          "test" +
          "test" +
          VAR_5 +
          VAR_6;
    }
};