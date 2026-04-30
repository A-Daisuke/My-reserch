const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 += "............a.b.c.d............a.......b........cd";
        }
        VAR_1 = VAR_2
          .replace(/a/g, function () {
            return "A";
          })
          .replace(/b/g, function () {
            return "B";
          })
          .replace(/c/g, function () {
            return "C";
          })
          .replace(/d/g, function () {
            return "D";
          });
    }
};