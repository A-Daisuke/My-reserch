const Benchmark = {
    run: function() {
        let VAR_1 = "one",
          VAR_2 = "two",
          VAR_3 = {
            KEY_1: "object",
            KEY_2: "three",
          };
        function FUNCTION_1(VAR_4) {
          let VAR_5 = Object.keys(VAR_4).map((VAR_6) => {
            return VAR_6 + ": " + VAR_4[VAR_6];
          });
          return "{" + VAR_5.join(", ") + "}";
        }
        let VAR_7 = null;
        function FUNCTION_2(VAR_8, VAR_9) {
          if (VAR_8 > 0 && VAR_8 % 1000 === 0) {
            VAR_7 = VAR_9();
          }
        }
        for (let VAR_10 = 0; VAR_10 < 2000; VAR_10++) {
          FUNCTION_2(VAR_10, () => "Message " + VAR_1 + ", " + VAR_2);
        }
    }
};