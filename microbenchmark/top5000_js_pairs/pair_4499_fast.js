const Benchmark = {
    run: function() {
        var VAR_1 = ["a", "b", "c", "d", "e"];
        var VAR_4 = Math.random().toString();
        var VAR_5 = Math.random().toString();
        var VAR_6 = [
          VAR_4,
          "",
          "test",
          "test",
          "test",
          "test",
          "test",
          "test",
          "test",
          "test",
          "test",
          "test",
          VAR_4,
          VAR_5,
        ].join("");
    }
};