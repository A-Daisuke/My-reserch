const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Array.prototype.reduce.call(
            VAR_1,
            function (VAR_2, VAR_3) {
              return VAR_2.concat([
                [
                  VAR_3,
                  {
                    KEY_1: "T",
                    KEY_2: "A",
                    KEY_3: "G",
                    KEY_4: "C",
                  }[VAR_3],
                ],
              ]);
            },
            [],
          );
        }
        FUNCTION_1("ATCGA");
        FUNCTION_1("TTGAG");
        FUNCTION_1("CTCTA");
    }
};