const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 += "............a.b.c.d............a.......b........cd";
        }
        VAR_1 = VAR_2
          .replace(/a/g, "A")
          .replace(/b/g, "B")
          .replace(/c/g, "C")
          .replace(/d/g, "D");
    }
};