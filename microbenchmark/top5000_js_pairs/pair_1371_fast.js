const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 += "............a.b.c.d............a.......b........cd";
        }
        VAR_1 = VAR_2.replace(/a|b|c|d/g, function (VAR_5) {
          return VAR_5 === "a"
            ? "A"
            : VAR_5 === "b"
              ? "B"
              : VAR_5 === "c"
                ? "C"
                : VAR_5 === "d"
                  ? "D"
                  : "?";
        });
    }
};