const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 += "............a.b.c.d............a.......b........cd";
        }
        VAR_1 = VAR_2.split("").reduce(function (VAR_5, VAR_4) {
          return (
            VAR_5 +
            (VAR_4 === "a"
              ? "A"
              : VAR_4 === "b"
                ? "B"
                : VAR_4 === "c"
                  ? "C"
                  : VAR_4 === "d"
                    ? "D"
                    : VAR_4)
          );
        });
    }
};