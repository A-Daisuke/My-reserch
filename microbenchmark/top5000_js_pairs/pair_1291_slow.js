const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2,
          VAR_3,
          VAR_4 = ["a", "b", "c", "d", "e", "f", "g"];
        VAR_1 = 0;
        for (; VAR_1 < 100000; VAR_1++) {
          VAR_2 = VAR_4[VAR_1 % 8];
          VAR_3 =
            VAR_2 == "a"
              ? 1
              : VAR_2 == "b"
                ? 2
                : VAR_2 == "c"
                  ? 3
                  : VAR_2 == "d"
                    ? 4
                    : VAR_2 == "e"
                      ? 5
                      : VAR_2 == "f"
                        ? 6
                        : 7;
        }
    }
};