const Benchmark = {
    run: function() {
        (function VAR_1() {
          var VAR_1 = "hello",
            VAR_2 = "world",
            VAR_3 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            VAR_4 = "hhhhhhhhhhhhhhhhhhhhhhhh";
          var VAR_5 = new Function("b", "var c=b+100;");
          for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
            VAR_5(VAR_3);
          }
        })();
    }
};