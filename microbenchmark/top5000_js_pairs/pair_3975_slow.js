const Benchmark = {
    run: function() {
        Number.VAR_1 =
          Number.VAR_1 ||
          function (VAR_2) {
            return (
              typeof VAR_2 === "number" &&
              isFinite(VAR_2) &&
              Math.floor(VAR_2) === VAR_2
            );
          };
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_4 = Number.VAR_1(VAR_3);
        }
    }
};